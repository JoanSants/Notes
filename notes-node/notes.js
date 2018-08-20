const fs = require('fs');

var fetchNotes = () => {
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return notes =  JSON.parse(notesString);        
    }catch(e){
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

var logNote = (note) => {
    debugger;
    console.log('--')
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}


var addNote = (title,body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    }

    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);    
        return note;
    }
}

var getAll = () =>{
    return fetchNotes();
}

var removeNote = (title) =>{
    notes =  fetchNotes();
    filteredNotes = notes.filter((notes) => notes.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
}

var readNote = (title) => {
    notes = fetchNotes();
    filteredNotes = notes.filter((notes) => notes.title === title);
    return filteredNotes[0];
}

module.exports={
    addNote,
    getAll,
    removeNote,
    readNote,
    logNote
}