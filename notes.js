const fs = require("fs");

var fetchNotes = () => {
  notes = []
  try {
    notesString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(notesString);
  } catch (e) {}
  return notes;
};

var saveNotes = (notes) => {

  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title, body
  };
  var duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });
  if (duplicateNotes.length == 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  } else {
    return;
  }
};

var removeNote = (title) => {

  var notes = fetchNotes();
  var filteredNotes = notes.filter( (note) => note.title !== title);
  saveNotes(filteredNotes);

  if (filteredNotes.length == notes.length) {
    return false;
  } else {return true;}

};

var getNote = (title) => {
  var notes = fetchNotes();
  var readNotes = notes.filter((note) => note.title === title);
  return readNotes[0];

};

var logNote = (note) => {
  console.log('--')
  debugger;
  console.log(`Title: ${note.title}\nBody: ${note.body}`);
}

var getAll = (title) => {
  return fetchNotes();
};

module.exports = {
  addNote, getNote, removeNote, getAll, logNote
};
