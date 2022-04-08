const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

/*
const newNoteBtn = document.querySelector(".fa-circle-plus")
const textArea = document.querySelector('.write-note-area')

function createNoteTakingArea(evt) {
  let noteTakingArea = '<input type="button" value="Clear" onclick="javascript:eraseText();"><textarea name="textBox" id="textBox" cols="200" rows="50" placeholder="Write your notes here..."></textarea>'
  textArea.insertAdjacentHTML("beforebegin", noteTakingArea)
};

newNoteBtn.addEventListener('click', createNoteTakingArea)
*/
// const saveTextBtn = document.querySelector(".fa-circle-plus")

// function newNote(noteBody) {
//   const template = `
//     <textarea name="textBox" id="textBox" cols="200" rows="50" placeholder="Write your notes here..."></textarea>
//     <button>Save</button>
//     <button>Cancel</button>`
//   return template
// }

// function displayNote(note) {
//   const noteDisplayArea = document.querySelector(".write-note-area")
//   noteDisplayArea.innerHTML = ''
//   noteDisplayArea.insertAdjacentHTML('afterbegin', note)
// }

// function getNote() {
//   const textArea = document.querySelector('.write-note-area')
//   const note = textArea.value
//   return note
// }

// function assembleNote() {
//   const noteText = getNote()
//   const note = newNote(noteText)
//   displayNote(note)
// }

// saveTextBtn.addEventListener('click', assembleNote)

const newNoteBtn = document.querySelector(".icons")
const noteArea = document.querySelector(".write-note-area")
let noteID = 1


newNoteBtn.addEventListener('click', createNewNote)

function createNewNote() {
  const noteTemplate = `
  <textarea name="newNote" id="newNote" cols="210" rows="50" placeholder="write here..."></textarea>
  <button id="saveButton" type="submit">Save</button>
  <button id="cancelButton" type="reset">Cancel</button>
  `
  noteArea.innerHTML = ''
  noteArea.insertAdjacentHTML("afterbegin", noteTemplate)

  const cancelBtn = document.querySelector("#cancelButton")
  cancelBtn.addEventListener('click', removeNoteTemplate)

  const saveBtn = document.querySelector("#saveButton")
  
  saveBtn.addEventListener('click', (evt) => {
    let noteLines = document.getElementById("newNote").value.split("\n")
    let noteTitle = noteLines[0];

    let noteContent = noteLines[1];
    // let index = 1
    // while (index < noteLines.length) {
    //   noteContent.push(noteLines[index])
    //   index += 1
    // }

    notes.push({title: noteTitle, noteBody: noteContent, id: (noteID+1)})
    noteID = noteID + 1;
    removeNoteTemplate()
  })
}

function removeNoteTemplate() {
  newNote.remove()
  saveButton.remove()
  cancelButton.remove()
}

