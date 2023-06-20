// // 326. Running Node Files

// console.log("Hello from VS / Terminal")

// for (let i = 0; i < 10; i++) {
//     console.log("Hello!!")
// }


// 327. Process & Argv

// node >
// >Process

// 327. Process & Argv

// console.log("Hello from args folder")
// console.log(process.argv)


// const args = process.argv.slice(2)
// for (let arg of args) {
//     console.log("Hi", arg)

// }

// $ node args.js asim nischal
// Hello from args folder
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\14693\\args.js',
//   'asim',
//   'nischal'
// ]
// Hi asim
// Hi nischal



// 328. File System Module Crash Course



const fs = require('fs');
try {
    const folder_name = process.argv[2] || 'Project'
    // fs.mkdirSync('Cats');
    fs.mkdirSync(folder_name);
    fs.writeFileSync(`${folder_name}/index.html`, "");
    fs.writeFileSync(`${folder_name}/app.js`, "");
    fs.writeFileSync(`${folder_name}/style.css`, "");
}
catch (e) {
    console.log("error")
    console.log(e)

}