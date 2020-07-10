let notes = [];

notes.push(document.getElementById('test'));
notes.push(document.getElementById('test2'));


for (let note of notes) {

	note.onmousedown = function (e) {

	note.style.position = 'absolute';
 	moveAt(e);
 	note.style.zIndex = 1000;

	function moveAt(e) {
	    note.style.left = e.pageX - note.offsetWidth / 2 + 'px';
	    note.style.top = e.pageY - note.offsetHeight / 2 + 'px';
		}

	document.onmousemove = function(e) {
	    moveAt(e);
		}

  note.onmouseup = function() {
    document.onmousemove = null;
    note.onmouseup = null;
  		}

  note.ondragstart = function() {
  return false;
  		}

	} 

}