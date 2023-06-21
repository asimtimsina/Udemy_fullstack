const franc = require('franc');
const langs = require('langs');
const colors = require('colors');


let data = process.argv[2]
try {
    let lang = franc(data)
    let fullLang = langs.where("3", lang)
    // console.log(fullLang)
    console.log(fullLang.name.green)
}
catch (e) {
    console.log("SORRY, couldn't find the language".red)
}