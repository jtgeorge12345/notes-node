console.log('starting notes');

const fs = require("fs");

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title, body
  };
  try {
    var notesString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(notesString);
  } catch (e) {  }

  // Need to make sure the note title doesn't match an existing title

  var duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length == 0) {

    notes.push(note);
    console.log(notes);
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
    console.log("note added successfully");

  } else {
    console.log('duplicate note.')
  }


};

var removeNote = (title) => {
  console.log(`deleting note: ${title}`);
};

var getNote = (title) => {
  console.log( `Getting Note ${title}`);
};

var getAll = (title) => {
  console.log('getting all notes');
};

module.exports = {
  addNote, getNote, removeNote, getAll
};
