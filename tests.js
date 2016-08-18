'use strict'

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
        assert( note.text == "Made changes")
        
    })
})

describe("Notes application increments number of notes as notes are added", function() {
    it("increments the note list as notes are added", function() {
        note = new Note("Hello world", "koya");
        noteapp = new NotesApplication("koya");
        assert(noteapp.notelist.length == 0)
        noteapp.addNote(note)
        assert(noteapp.notelist.length == 1)
    })
    it(" makes sure a note instance is passed into the add method", function() {
        note = new Note("Hello world", "koya");
        noteapp = new NotesApplication("koya");
        noteapp.add(note);
        assert(noteapp.notelist[noteapp.notelist.length -1] instanceof Note)
    })
    it("decrements the note list as notes are removed ", function() {
        note = new Note("Hello world", "koya");
        noteapp = new NotesApplication("koya");
        noteapp.addNote(note)
        assert(noteapp.notelist.length == 1)
        noteapp.delete(0)
        assert(noteapp.notelist.length == 0)
    })
    it("parameters passed into the edit method are different ", function() {
        note = new Note("Hello world", "koya");
        noteapp = new NotesApplication("koya");
        noteapp.add(note);
        previousText = note.text;
        noteapp.edit(0, "Changed");
        assert(noteapp.notelist[0].text != previousText)
    })
})