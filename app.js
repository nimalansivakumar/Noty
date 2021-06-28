//referencing elements
let input = document.querySelector("#text-input");
let addNoteButton = document.querySelector("#addButton");
let bgColor = document.querySelector("#color");

//function constructor
let NotesValue = function (note, color, id) {
  this.id = id;
  this.note = note;
  this.color = color;
};
//id for each note
let id = 0;

let addNote = () => {
  let newNote;

  if (input.value !== "") {
    id++;

    newNote = new NotesValue(input.value, bgColor.value, id);
    displayNote(newNote);

    input.value = "";
    input.focus();

    document.getElementById("no-note").style.display = "none";
  } else {
    alert("Enter valid Note!");
  }
};

//displaying note to the DOM
let displayNote = (newNote) => {
  let html = `<div  id ="note-card" class="note-box" style="background-color:${newNote.color}">
    <h2 class="note-text">${newNote.note}</h2>
    <button type="button" id="note-${newNote.id}" onclick="deleteNote(${newNote.id})"class="deleteButton"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg></i>
    </button>
    </div>`;

  document.querySelector(".notes-div").insertAdjacentHTML("beforeend", html);
};

//delete note
let deleteNote = (event) => {
  let element = document.getElementById("note-" + event);
  element.parentNode.remove(element);
};

//click event
addNoteButton.addEventListener("click", addNote);
