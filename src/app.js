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
const noteArea = document.querySelector(".create-note-area")

newNoteBtn.addEventListener('click', createNewNote)

function createNewNote() {
  const noteTemplate = `
  <textarea name="newNote" id="newNote" cols="210" rows="60" placeholder="write here..."></textarea>
  <button type="submit">Save</button>
  <button id="cancel-button" type="reset">Cancel</button>
  `
  noteArea.innerHTML = ''
  noteArea.insertAdjacentHTML("afterbegin", noteTemplate)

  const cancelBtn = document.querySelector("#cancel-button")
  cancelBtn.addEventListener('click', cancelNewNote)
}

function cancelNewNote() {
  location.reload();
}