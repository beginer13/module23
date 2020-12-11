const { alias } = require('yargs');
const yargs = require ('yargs');
const fs = require('fs');

const argv = yargs
    .option("name", {alias: "n", string: true})
    .option("type", {alias: "t", string: true})
    .demandOption(["name","type"], "Component name and at least one component type should be passed")
    .argv;

String.prototype.replaceAll = function(search, replace){
    return this.split(search).join(replace);
    };

if (argv.type.indexOf("css") != -1 || argv.type.indexOf("js") != -1) {
    fs.mkdir(convertName(argv.name), () => {console.log("directory has been created")})
}

if (argv.type.indexOf("js") != -1) {   
    fs.readFile("./Templates/Template.js", "utf8", (error, data) => {
        createFile(data, convertName(argv.name), "js");
        });
}

if (argv.type.indexOf("css") != -1) {fs.readFile("./Templates/Template.css", "utf8", (error, data) => {
        createFile (data, convertName(argv.name), "css");
        });
};

function createFile (txt, name, type) {
    txt = txt.replaceAll("TEMPXXX", name);
    txt = txt.replaceAll("tempxxx", name.toLowerCase());
    const filename = "./"+name+"/"+name+"."+type
    fs.writeFile(filename, txt, ()=>{console.log(type+" template has been created")});
};

function convertName (name) {
    name = name.toLowerCase();
    name = name[0].toUpperCase()+name.slice(1);
    return name;
}
