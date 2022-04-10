const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

const newNoteBtn = document.querySelector(".icons")
const noteArea = document.querySelector(".write-note-area")
let noteID = 1

//This event listener for the new note icon will call the createNewNote function.
newNoteBtn.addEventListener('click', createNewNote)

//This function will create the note taking environment. It will also create event listeners for save and cancel buttons.
function createNewNote() {
  const noteTemplate = `
  <textarea name="newNote" id="newNote" cols="210" rows="50" placeholder="write here..."></textarea>
  <button id="saveButton" type="submit">Save</button>
  <button id="cancelButton" type="reset">Cancel</button>
  `

  newNoteBtn.innerHTML = ''
  noteArea.insertAdjacentHTML("afterbegin", noteTemplate)

  const cancelBtn = document.querySelector("#cancelButton")
  cancelBtn.addEventListener('click', removeNoteTemplate)

  const saveBtn = document.querySelector("#saveButton")
  
  saveBtn.addEventListener('click', (evt) => {
    let noteLines = document.getElementById("newNote").value.split("\n")
    let noteTitle = noteLines[0];
    let noteContent = noteLines[1];
    
    notes.push({title: noteTitle, noteBody: noteContent, id: (noteID+1)})
    noteID = noteID + 1;

    addToSideNav(noteTitle, noteID)

    removeNoteTemplate()
  })
}

function removeNoteTemplate() {
  newNote.remove()
  saveButton.remove()
  cancelButton.remove()
  newNoteBtn.innerHTML = '<i class="fa-solid fa-circle-plus">'
}

//Add to side nav
const sideNavList = document.querySelector('.notes-list')

function addToSideNav(title, index) {
  if (title != '') {
    titleProperHTML = '<li id=" ' + index + '">' + title + '</li>'
    sideNavList.insertAdjacentHTML("beforeend", titleProperHTML)
    makeSideNotesClickable(index)
  }
}

addToSideNav(notes[0].title)

//Open Saved Note from Side Nav
function makeSideNotesClickable(index) {
  
}