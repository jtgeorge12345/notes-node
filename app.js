//Nodejs.org/api will have all modules

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')
const _ = require('lodash');
const yargs = require('yargs')

var titleOptions = {
  describe: "Title of note",
  demand: true,
  alias: "t"
};

var bodyOptions = {
  describe: "The body of the note",
  demand: true,
  alias: "b"
};

const argv = yargs
  .command('add', 'add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command("list", "list all notes")
  .command("read", "read a note", {
    title: titleOptions
  })
  .command("remove", "remove a note", {
    title: titleOptions
  })
  .help()
  .argv;

var command = process.argv[2];

if (command == 'add') {
  console.log('adding new note');
  var note = notes.addNote(argv.title, argv.body);
  if (note==null){
    console.log("Error: A note with that title already exists.");
  } else {
    console.log("Note was successfully added.");
    notes.logNote(note);
  }
} else if (command == 'list') {
  console.log('Showing all notes');
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => {
    notes.logNote(note);
  });
} else if (command == 'read'){
  console.log('Reading a note');
  var readNote = notes.getNote(argv.title);
  if (readNote){
    notes.logNote(readNote);
  } else {
    console.log(`Could not locate a note with title: ${argv.title}`);
  }

} else if (command == 'remove'){
  console.log('Removing a note');
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? `successfully removed note: ${argv.title}` : `Failed to removed note ${argv.title}`;
  console.log(message);
} else {
  console.log('Command not recognized');
}


// console.log(_.isString(true))
// console.log(_.isString('true'))
// console.log(_.isString(1))
// var user = os.userInfo();
// console.log(notes.add(9,2));
// fs.appendFileSync('greetings.txt', `Hello ${user.username} ${notes.age} 22`);
