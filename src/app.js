'use strict';

//notes array of objects used to store saved notes
const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

const newNoteBtn = document.querySelector(".icons")
const noteArea = document.querySelector(".write-note-area")
const readArea = document.querySelector('.read-note-area')

//declaring and initializing the noteID for notes array
let noteID = 1

//This event listener for the new note icon will call the createNewNote function.
newNoteBtn.addEventListener('click', createNewNote)

//This function will create the note taking environment. It will also create event listeners for save and cancel buttons.
function createNewNote() {
  //note template HTML to be inserted
  const noteTemplate = `
  <textarea name="newNote" id="newNote"  placeholder="write here..."></textarea>
  <button id="saveButton" type="submit">Save</button>
  <button id="cancelButton" type="reset">Cancel</button>
  `
  //Remove the new note button when creating new note
  newNoteBtn.innerHTML = ''
  //insert the noteTemplate into the note taking area
  noteArea.insertAdjacentHTML("afterbegin", noteTemplate)
  //select the cancel button by id
  const cancelBtn = document.querySelector("#cancelButton")
  //add event listener to the cancel button that will call the removeNoteTemplate function
  cancelBtn.addEventListener('click', removeNoteTemplate)
  //selecting the save button by id
  const saveBtn = document.querySelector("#saveButton")
  //add event listener to the save button that will run anonymous function
  saveBtn.addEventListener('click', saveNote)
}
//save function
function saveNote(event) {
  //store the inputted text as an array separated by new lines
  let noteLines = document.getElementById("newNote").value.split("\n")
  //store the first index of the noteLines as the note title
  let noteTitle = noteLines[0];

  //store the remainder of the notes as the content
  noteLines.splice(0,1)
  let noteContent = noteLines.join("\n")

  if (noteTitle != '') {
    notes.push({ title: noteTitle, noteBody: noteContent, id: (noteID + 1) })
    console.log(event)
    //increment the noteID in preparation of the next time a note is saved
    noteID = noteID + 1;
    //call function to add the saved note's title to the side navigation.
    addToSideNav(noteTitle, noteID)
  }
  //call the removeNoteTemplate function to remove the inserted note template and return the new note button  
  removeNoteTemplate()
}

//function that will remove the inserted note template and return the new note button
function removeNoteTemplate() {
  if (readArea.innerHTML !== '') {
    readArea.innerHTML = ''
  }
  if (typeof newNote !== 'undefined') {
    newNote.remove()
  }
  if (typeof saveButton !== 'undefined') {
    saveButton.remove()
  }
  if (typeof cancelButton !== 'undefined') {
    cancelButton.remove()
  }
  if (typeof closeButton !== 'undefined') {
    closeButton.remove()
  }
  newNoteBtn.innerHTML = '<i class="fa-solid fa-circle-plus">'
}

//select the side navigation notes list by class
const sideNavList = document.querySelector('.notes-list')

//function to add the save note's title to the side navigation
function addToSideNav(title, titleID) {
  //variable with template of the HTML to be inserted. Will include an id that matches its id in the notes array
  const titleProperHTML = '<li id="' + titleID + '">' + title + '</li>'
  //insert the above template into the side navigation
  sideNavList.insertAdjacentHTML("beforeend", titleProperHTML)
  //add event handler to the title in the side nav 
  const selectedNote = document.getElementById(titleID)
  selectedNote.addEventListener('click', displayTheNote)
  
}

addToSideNav(notes[0].title, notes[0].id)

function displayTheNote(event) {
  noteArea.innerHTML = ''
  readArea.innerHTML = ''

  //note template HTML to be inserted
  const noteTemplate = `
  <button id="closeButton">x</button>
  <div>
    <h1 id="noteTitle"></h1>
    <p id="noteBody"></p>
  <div>
  `

  //Remove the new note button when creating new note
  newNoteBtn.innerHTML = ''
  //insert the noteTemplate into the note taking area
  readArea.insertAdjacentHTML("afterbegin", noteTemplate)
  
  //declare and initialize noteID with the correct notes id
  const noteID = event.target.id - 1
  // console.log(event.target.id)
  noteTitle.textContent = notes[noteID].title
  noteBody.textContent = notes[noteID].noteBody 
  
  //select and add event listener to close button
  const closeBtn = document.querySelector('#closeButton')
  closeBtn.addEventListener('click', removeNoteTemplate)
}