const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/relationshipDB')
    .then(() => {
        console.log("Mongo Coonection open")
    })
    .catch(() => {
        console.log("Mongo Error")
    })


const userSchema = mongoose.Schema({
    username: String,
    age: Number,

})

const User = mongoose.model('User', userSchema);



///////////////////////

const tweetSchema = mongoose.Schema({
    text: String,
    likes: Number,
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
})

const Tweet = mongoose.model('tweet', tweetSchema);


const makeTweets = async () => {
    // const user = new User({ username: 'Asim', age: 24 });
    const user = await User.findOne({ username: 'Asim' })
    const tweet2 = new Tweet({ text: 'I love Everest', like: 2200, user: user });

    // await user.save();
    await tweet2.save();

}

// makeTweets();

const findTweet = async () => {
    // const t = await Tweet.find({}); //-> populates all data of user
    const t = await Tweet.find({}).populate('user'); //-> populates all data of user
    // const t = await Tweet.findOne({}).populate('user'); //-> populates all data of user
    // const t = await Tweet.find({}).populate('user', 'username'); //-> populates only the usernams
    console.log(t)
}

findTweet()