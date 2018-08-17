console.log("Starting app.js");

//const fs = require('fs');
//const _ = require('lodash');
const yargs = require('yargs');

const note = require('./note')

const argv = yargs.argv;
var command = argv._[0];
console.log(yargs.argv);

if (command === 'list'){
    note.getAll();
}else if(command === 'add'){
    note.addNote(argv.title, argv.body);
}else if(command === 'remove'){
    note.removeNote(argv.title);
}else if(command === 'read'){
    note.readNote(argv.title);
}else{
    console.log('aaa command not recognized');
}