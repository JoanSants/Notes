console.log("Starting app.js");

//const fs = require('fs');
//const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes')
const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias:'t'
}

const bodyOptions = {
    describe: 'The content of Note',
    demand:true,
    alias:'b'
}
const argv = yargs
.command('add','Add a new note',{
    title:titleOptions,
    body:bodyOptions
})
.command('list','Get all Notes')
.command('remove','Remove a Note',{
    title:titleOptions
}).command('read','Read a note',{
    title:titleOptions
})
.help()
.argv;
var command = argv._[0];

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