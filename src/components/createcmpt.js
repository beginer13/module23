const { alias } = require('yargs');
const yargs = require ('yargs');
const fs = require('fs');

const argv = yargs
    .option("name", {alias: "n", string: true})
    .demandOption(["name"], "Component name should be passed")
    .argv;

String.prototype.replaceAll = function(search, replace){
    return this.split(search).join(replace);
    };

fs.mkdir(convertName(argv.name), () => {console.log("directory has been created")});
     
fs.readFile("./Templates/Template.js", "utf8", (error, data) => {
    createFile(data, convertName(argv.name), "js");
    });

fs.readFile("./Templates/Template.css", "utf8", (error, data) => {
    createFile (data, convertName(argv.name), "css");
    });

function createFile (txt, name, type) {
    txt = txt.replaceAll("TEMPXXX", name);
    txt = txt.replaceAll("tempxxx", name.toLowerCase());
    const filename = "./"+name+"/"+name+"."+type
    fs.writeFile(filename, txt, ()=>{console.log(type+" template has been created")});
};

function convertName (name) {
    let tempname = name.toLowerCase();
    tempname = tempname[0].toUpperCase()+tempname.slice(1);
    return tempname;
}
