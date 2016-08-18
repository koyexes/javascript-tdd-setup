

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/notes.js');


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
    it("asserts that an empty parameter isn't passed into the setNote method", function() {
        note = new Note("Hello World", "koya")
        note.setNote("Made changes") 
        assert( note.text != "")
        
    })
})

describe("Notes application increments number of notes as notes are added", function() {
    it("increments the note list as notes are added", function() {
        note = new Note("Hello world", "koya");
        noteapp = new NotesApplication();
        assert(noteapp.notes.length == 0)
        noteapp.addNote(note)
        assert(noteapp.notes.length == 1)
    })
    it(" makes sure a note instance is passed into the add method", function() {
        note = new Note("Hello world", "koya");
        noteapp = new NotesApplication();
        noteapp.addNote(note);
        assert(noteapp.notes[0] instanceof Note)
    })
    it("decrements the note list as notes are removed ", function() {
        note = new Note("Hello world", "koya");
        noteapp = new NotesApplication();
        noteapp.addNote(note)
        assert(noteapp.notes.length == 1)
        noteapp.delete(0)
        assert(noteapp.notes.length == 0)
    })
    it("parameters passed into the edit method are different ", function() {
        note = new Note("Hello world", "koya");
        noteapp = new NotesApplication();
        noteapp.addNote(note);
        previousText = note.text;
        noteapp.edit(0, "Changed");
        assert(noteapp.notes[0].text != previousText)
    })
    it("notes searched for exists within the notelist", function() {
        note = new Note("Hello world", "koya");
        noteapp = new NotesApplication();
        noteapp.addNote(note);
        assert(noteapp.get(0).text == "Hello world");
    })
})