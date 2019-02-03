console.log("starting app.js.");

//Nodejs.org/api will have all modules

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')
const _ = require('lodash');



var filteredArray = _.uniq([1,2,3,4,5,5,5,5,"jason", "jason"]);
console.log(filteredArray)
// console.log(_.isString(true))
// console.log(_.isString('true'))
// console.log(_.isString(1))
// var user = os.userInfo();
// console.log(notes.add(9,2));
// fs.appendFileSync('greetings.txt', `Hello ${user.username} ${notes.age} 22`);
