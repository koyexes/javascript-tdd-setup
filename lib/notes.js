module.exports = 
	function Note (note_content, author ) {
		if( (note_content != "") && (author != "") ) {
			this.text = note_content; // create and initiallize the text property

	    	this.author = author; // create and initiallize the author property
		}
	    
	    
    /** This method replaces the string of the note object text property
     */
	    this.setNote = function(note_content) {
	    	if((note_content != "") && (typeof note_content != "number") ) { // checks if the parameter passed is a string and not empty
	    		this.text = note_content; // assigns the parameter to the text property
	    	}
	        
    	};

    /** 
    	This method changes the author name
     */
    	this.setAuthor = function(new_author) {
	    	if((new_author != "") && (typeof new_author != "number") ) { // checks if the parameter passed is a string and not empty
	    		this.text = new_author; // assigns the parameter to the author property
	    	}
	        
    	};
	};
