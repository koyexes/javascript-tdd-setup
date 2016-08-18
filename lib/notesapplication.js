// NotesApplication class



module.exports =

	function NotesApplication () {
		
		this.notes = [];
		

		this.addNote = function (note) {
			
			this.notes.push(note);
				
		};
		
		this.notelist = function () {
			var list = "";
			
			for (var i = 0; i < this.notes.length; i++) {
				
				list = list + "Note ID: " + i + "\n";
				list = list + this.notes[i].text + "\n";
				list = list + "By Author " +  this.notes[i].author + "\n\n";
			
			}
			
			console.log(list);
		};
		
		this.get = function (note_id) {
			if ( (typeof note_id === "number") && (this.notes.length > note_id) ) {
				return this.notes[note_id];
			}
			
		};
		
		this.search = function (search_text) {
			for (var i = 0; i < this.notes.length; i++) {
				if( this.notes[i].text.indexOf(search_text) > -1) {
					console.log(this.notes[i].text + "\n");	
				}else{
					console.log("No match found");
				}
			}
		};
		
		this.delete = function (note_id) {
			this.notes.splice(note_id, 1);
		};
		
		this.edit = function (note_id, new_content) {
			this.notes[note_id].setNote(new_content);
		};
	}
