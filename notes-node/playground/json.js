/*
var obj = {
    name:'Joan'
};

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

var jsonString = '{"name":"Joan", "age":23}';
var person = JSON.parse(jsonString);
console.log(typeof person);
console.log(person);
*/

const fs = require('fs');

var originalNote= {
    title: 'some title',
    body: 'some body'
}

sOriginalNote = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',sOriginalNote);
var noteString = fs.readFileSync('notes.json');
var oOriginalNote = JSON.parse(noteString);
console.log(typeof oOriginalNote);
console.log(oOriginalNote);