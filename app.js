console.log("starting app.js.");

//Nodejs.org/api will have all modules

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')
const _ = require('lodash');
const yargs = require('yargs')


const argv = yargs.argv;
var command = process.argv[2];

console.log("Yargs argv:", argv);
console.log("process argv", process.argv);

if (command == 'add') {
  console.log('adding new note');
  notes.addNote(argv.title, argv.body);
} else if (command == 'list') {
  console.log('showing all notes');
  notes.getAll();
} else if (command == 'read'){
  console.log('reading a note');
  notes.getNote(argv.title);
} else if (command == 'remove'){
  console.log('removing a note');
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}


// console.log(_.isString(true))
// console.log(_.isString('true'))
// console.log(_.isString(1))
// var user = os.userInfo();
// console.log(notes.add(9,2));
// fs.appendFileSync('greetings.txt', `Hello ${user.username} ${notes.age} 22`);
