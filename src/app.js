//notes array of objects used to store saved notes
const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

//selecting the new note button by class
const newNoteBtn = document.querySelector(".icons")
//selecting the note taking area by class
const noteArea = document.querySelector(".write-note-area")
//declaring and initializing the noteID for notes array
let noteID = 1

//This event listener for the new note icon will call the createNewNote function.
newNoteBtn.addEventListener('click', createNewNote)

//This function will create the note taking environment. It will also create event listeners for save and cancel buttons.
function createNewNote() {
  //note template HTML to be inserted
  const noteTemplate = `
  <textarea name="newNote" id="newNote" cols="210" rows="50" placeholder="write here..."></textarea>
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
  saveBtn.addEventListener('click', () => {
    //store the inputted text as an array separated by new lines
    let noteLines = document.getElementById("newNote").value.split("\n")
    //store the first index of the noteLines as the note title
    let noteTitle = noteLines[0];
    //store the remainder of the notes as the content
    let noteContent = noteLines[1];
    //add the title, content and id to the notes array
    notes.push({title: noteTitle, noteBody: noteContent, id: (noteID+1)})
    //increment the noteID in preparation of the next time a note is saved
    noteID = noteID + 1;
    //call function to add the saved note's title to the side navigation.
    addToSideNav(noteTitle, noteID)
    //call the removeNoteTemplate function to remove the inserted note template and return the new note button
    removeNoteTemplate()
  })
}
//function that will remove the inserted note template and return the new note button
function removeNoteTemplate() {
  newNote.remove()
  saveButton.remove()
  cancelButton.remove()
  newNoteBtn.innerHTML = '<i class="fa-solid fa-circle-plus">'
}

//Add to side nav

//select the side navigation notes list by class
const sideNavList = document.querySelector('.notes-list')

//function to add the save note's title to the side navigation
function addToSideNav(title, titleID) {
  //conditional to prevent saving note without title
  if (title != '') {
    //variable with template of the HTML to be inserted. Will include an id that matches its id in the notes array
    titleProperHTML = '<li id=" ' + titleID + '">' + title + '</li>'
    //insert the above template into the side navigation
    sideNavList.insertAdjacentHTML("beforeend", titleProperHTML)
    //call function to add event listener to each side nav li
    makeSideNotesClickable(titleID)
  }
}

//These three lines handle the initial note by selecting it, giving it an id of 1 and calling the addToSideNav function
const firstListItem = document.querySelector('ul li')
firstListItem.setAttribute("id", "1")
addToSideNav(notes[0].title, notes[0].id)

//Open Saved Note from Side Nav

//This function will add event listeners to the notes on the side navigation
function makeSideNotesClickable(titleID) {
  //selecting the element by id
  let selectedNote = document.getElementById(titleID)
  //add event listener to element selectedNote to call openNoteToRead function
  selectedNote.addEventListener('click', openNoteToRead)

  // for (line of notes) {
  //   const elementID = line.id
  //   console.log(elementID)
  //   let selectedNote = document.getElementById('elementID')
  //   selectedNote.addEventListener('click', openNoteToRead)
  // }  
}

//This function will create template and insert the saved note that was clicked
function openNoteToRead() {
  const readArea = document.querySelector('.read-note-area')
  //note template to recreate
  const noteTemplate = `
  <textarea name="newNote" id="newNote" cols="210" rows="50"></textarea>
  <button>x</button>
  `
  //insert the noteTemplate into the readArea
  readArea.insertAdjacentHTML("beforeend", noteTemplate)
  //testing. Will change for the actual note input afterwards.
  newNote.innerHTML = '<p>test</p>'
}