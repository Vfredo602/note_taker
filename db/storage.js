// where we will start making classes, to be able to read our files
// javascript classes for tonight..
const fs = require("fs");
const util = require("util");
const uniqid = require('uniqid');

// const uuid = require("uuid");
// Setting up variables to start promises on systems.
const writeAsync = util.promisify(fs.writeFile);
const readAsync = util.promisify(fs.readFile);
// created a class that will read from our db.json
class Storage {
  readFile() {
    return readAsync("db/db.json", "utf8");
  }
//   parses notes into JSON 
  writeFile(note) {
      return writeAsync("db/db.json", JSON.stringify(note));
  }

readNote(){
  return this.readFile()
  .then((notes => {
    let orderNotes;
    orderNotes = [].concat(JSON.parse(notes));
    return orderNotes
  }))
}  

writeNote(note) {
    // making sure we are setting note parameter as object for title and textua
    const {title, text} = note;
    const newNote = {title, text, id:uniqid()} //id:uuid()
// creating new notes, updating new notes, passing in the new notes
    return this.readNote()
    .then(notes => [...notes, newNote])
    .then(updatedNotes => this.writeFile(updatedNotes))
    .then(() => newNote)
}
}


module.exports = new Storage();
