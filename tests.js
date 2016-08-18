'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/note.js');


describe("Note creation works properly", function() {
    it("assigns author based on the parameter supplied in the constructor", function() {
        note = new Note("Hello world", "koya")
        assert(note.author == "koya")
    })
    it("assigns text to note based on the parameter supplied in the constructor", function() {
        note = new Note("Hello world", "koya")
        assert(note.text == "Hello world")
    })
    it("asserts that empty parameters are not passed in", function () {
        note = new Note("Hello World", "koya")
        assert( (note.text != "") || (note.author != ""))
    })
    it("asserts that an empty parameter isn't passed into the note set")
})

describe("Notes application increments number of notes as notes are added", function() {
    it("increments the note list as notes are added", function() {
        note = new Note("Hello world", "Chidiebere");
        noteapp = new NotesApplication("Chidiebere");
        assert(noteapp.notelist.length == 0)
        noteapp.addNote(note)
        assert(noteapp.notelist.length == 1)
    })
})