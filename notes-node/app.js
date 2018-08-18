console.log("Starting app.js");

//const fs = require('fs');
//const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes')

const argv = yargs.argv;
var command = argv._[0];
console.log(yargs.argv);

if (command === 'list'){
    note.getAll();
}else if(command === 'add'){
    note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log("Note created");
        console.log(`The title is ${note.title} and the text is ${note.body}`)
    }else{
        console.log("Invalid Title");
    }
}else if(command === 'remove'){
    note.removeNote(argv.title);
}else if(command === 'read'){
    note.readNote(argv.title);
}else{
    console.log('aaa command not recognized');
}