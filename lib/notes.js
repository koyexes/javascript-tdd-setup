// Note class

module.exports = 
	function Note (note_content, author ) {
	    this.text = note_content;

	    this.author = author;
	    
	    this.setNote = function(note_content) {
	        this.text = note_content;
    	};
	};
