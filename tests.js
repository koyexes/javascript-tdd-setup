

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
    it("notes not set if an integer is passed in", function () {
        note = new Note("Hello World", "koya");
        note.setNote(6);
        assert( note.text == "Hello World" );
    })
    it("makes changes based on the parameter passed", function() {
        note = new Note("Hello World", "koya")
        note.setNote("Made changes") 
        assert( note.text == "Made changes");
        
    })
    it("makes no changes to note content when an empty parameter is passed", function () {
         note = new Note("Hello World", "koya");
         note.setNote("");
         assert( note.text == "Hello World" );
    })
    it("makes no changes to note author when an empty parameter is passed", function () {
         note = new Note("Hello World", "koya");
         note.setAuthor("");
         assert( note.author == "koya" );
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
    it("search function should return true if found and false if not", function() {
        note = new Note("Hello world", "koya");
        note2 = new Note("Hy World", "Gabriel")
        noteapp = new NotesApplication();
        noteapp.addNote(note);
        noteapp.addNote(note2);
        assert(noteapp.search("Hello world") == true);
        assert(noteapp.search("Taken") == false);
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
        assert(noteapp.edit(0, "Hy World") == true );
    })
    it("note called for  exists within the notelist", function() {
        note = new Note("Hello world", "koya");
        noteapp = new NotesApplication();
        noteapp.addNote(note);
        assert(noteapp.get(0).text == "Hello world");
    })
})