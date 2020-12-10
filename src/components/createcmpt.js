const { alias } = require('yargs');
const yargs = require ('yargs');
const fs = require('fs');

const argv = yargs
    .option("name", {alias: "n", string: true})
    .demandOption(["name"], "Component name should be passed")
    .argv;
     
fs.readFile("./Templates/Template.js", "utf8", (error, data) => {
    fs.mkdir(convertName(argv.name), () => {console.log("directory has been created")});
    createJsFile(data, convertName(argv.name));
    createCssFile (convertName(argv.name));
})

function createJsFile (txt, name) {
    txt = txt.replace("TEMPXXX", name);
    txt = txt.replace("TEMPXXX", name);
    txt = txt.replace("tempxxx",name.toLowerCase())
    const filename = "./"+name+"/"+name+".js"
    fs.writeFile(filename, txt, ()=>{console.log("js file has been created")});
};

function createCssFile (name) {
    const filename = "./"+name+"/"+name+".css"
    txt = "."+name.toLowerCase()+"{  }";
    fs.writeFile(filename, txt, ()=>{console.log("css file has been created")});
};

function convertName (name) {
    let tempname = name.toLowerCase();
    tempname = tempname[0].toUpperCase()+tempname.slice(1);
    return tempname;
}
