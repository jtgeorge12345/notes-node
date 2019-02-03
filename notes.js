console.log('starting notes');

var addNote = (title, body) => {
  console.log("Adding note\nTitle:", title, "\nBody:", body);
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
