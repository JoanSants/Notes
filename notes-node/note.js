console.log("Starting node.js")

var addNote = (title,body) => {
    console.log('Título: '+ title +'; Mensagem: '+ body +'.')
}

var getAll = () =>{
    console.log("Listing all notes");
}

var removeNote = (title) =>{
    console.log("Removing note "+ title +".");
}

var readNote = (title) => {
    console.log("Reading note "+ title +".");
}

module.exports={
    addNote,
    getAll,
    removeNote,
    readNote
}