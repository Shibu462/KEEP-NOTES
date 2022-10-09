const addTitle = document.getElementById('addTitle');
const addText = document.getElementById('addText');
const addNoteButton = document.getElementById('addNote');
const notesDiv = document.getElementById('notes');


const addNotes = () => {
  
    let notes = localStorage.getItem('notes')
    if (notes === null) {
        notes = [];
    } else {
        notes = JSON.parse(notes);
    }
    if (addText.value == '') {
        alert('Add your note')
        return;
    }
    const noteObj = {
        title: addTitle.value,
        text:addText.value,
    }
    addTitle.value = '';
    addText.value = '';
    notes.unshift(noteObj);
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
}
const showNotes = () => {

   let notesHTML = '';
   let notes = localStorage.getItem('notes')
    if (notes === null) {
        return;
    } else {
        notes = JSON.parse(notes);
    }
    for (let i = 0; i < notes.length; i++){
        notesHTML += `
        <div class="note">
                    <button class="deleteNote" id=${i} onclick="deleteNote(${i})">Delete</button>
                    <button class="editNote" id=${i} onclick="editNote(${i})">Edit</button>
                    <div class="title"><h2> ${notes[i].title}</h2></div>
                    <div class="text">${notes[i].text}</div>
             </div>
        `
    }
    notesDiv.innerHTML = notesHTML;
}
addNoteButton.addEventListener('click', () => addNotes())

showNotes();

const deleteNote = (ind) => {
    let notesHTML = '';
   let notes = localStorage.getItem('notes')
    if (notes === null) {
        return;
    } else {
        notes = JSON.parse(notes);
    }
    notes.splice(ind, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
}


const editNote = (ind) => {
   let notesHTML = '';
   let notes = localStorage.getItem('notes')
   if (notes === null) {
        return;
    } else {
        notes = JSON.parse(notes);
    }
    addTitle.value= notes[ind].title;
    addText.value = notes[ind].text;
    notes.splice(ind, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
}