const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pw, salt)
    console.log(salt);
    console.log(hash);
}

const hashPassword_2 = async (pw) => {
    // const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pw, 10)
    // console.log(salt);
    console.log(hash);
}

hashPassword_2('monkey');


const login = async (pw, hashedPassword) => {
    const result = await bcrypt.compare(pw, hashedPassword);
    if (result) {
        console.log("Logged in")
    }
    else {
        console.log("Incorrect password")
    }
}

login('monkey', '$2b$10$I0.8LmIVCGIG5/RpsFmAdODWFYnjyL7K0s0ouVrPTI3NhrscssG/W');