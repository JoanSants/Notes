console.log("Starting app.js");

//const fs = require('fs');
//const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes')

const argv = yargs.argv;
var command = argv._[0];
console.log(yargs.argv);

if (command === 'list'){
    allNotes = notes.getAll();
    console.log(`Listing ${allNotes.length} note(s).`)
    allNotes.forEach((note) => notes.logNote(note));
}else if(command === 'add'){
    note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log("Note created");
        notes.logNote(note);
    }else{
        console.log("Invalid Title");
    }
}else if(command === 'remove'){
    note = notes.removeNote(argv.title);
    message = note ? 'Note removed' : 'Note not found';
    console.log(message);    
}else if(command === 'read'){
    note = notes.readNote(argv.title);
    if(note){
        notes.logNote(note);
    }else{
        console.log("Note not found")
    }
}else{
    console.log('command not recognized');
}