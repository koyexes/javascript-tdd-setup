// Note class

module.exports = 
	function Note (note_content, author ) {
		if( (note_content != "") && (author != "") ){
			this.text = note_content;

	    	this.author = author;
		}
	    
	    
	    this.setNote = function(note_content) {
	    	if((note_content != "") && (typeof note_content != "number") ){
	    		this.text = note_content;
	    	}
	        
    	};

    	this.setAuthor = function(new_author) {
	    	if((new_author != "") && (typeof new_author != "number") ){
	    		this.text = new_author;
	    	}
	        
    	};
	};
