console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command:', command);
console.log('process', process.argv);
console.log('yargs', argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body)
} else if (command === 'list') {
  console.log('Listing all notes');
} else if (command === 'read'){
  console.log('Perusing all notes')
} else if (command === 'remove') {
  console.log('Removing all notes')
} else {
  console.log('Command not recognized')
}
