
const addBtn = document.getElementById('addNote');
const notes = document.querySelector('.notes');

addBtn.addEventListener('click', function () {
    addNote();
})


// function saveNotes(){
//     const allNotes=document.querySelectorAll('.note textarea');
//     allNotes.forEach((textarea,index)=>{
//         console.log(`note ${index + 1}:`,textarea.value);
//     })
// }


function saveNotes() {
    const allNotes = document.querySelectorAll('.note textarea');
    // console.log(allNotes);
    const data = [];
    allNotes.forEach((noteData, index) => {
        data.push(noteData.value)
    })

     if (data.length === 0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data))
    }

    console.log(data);
}

function addNote(text = "") {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `<div class="bar">
 <button class="save">Save</button>
 <button class="delete">delete</button>
            </div>

            <textarea class="textarea" placeholder="enter your text here">${text}</textarea>`;

    note.querySelector('.delete').addEventListener('click', function () {
        note.remove()
        saveNotes()
    })

    note.querySelector('.save').addEventListener('click', function () {
        saveNotes()
    })

    note.querySelector('textarea').addEventListener(
        'focusout',function(){
            saveNotes()
        }
    )

    notes.appendChild(note);

    saveNotes();
}

(
    function () {
        const lsNotes = JSON.parse(localStorage.getItem('notes'));
        if (lsNotes === null) {
            addNote()
        }
        else {
            lsNotes.forEach((lsNote) => {
                addNote(lsNote)
            })
        }
    }

)()