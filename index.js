
let addBox = document.querySelector(".parent"),
popupBox = document.querySelector(".pop-up"),
btnClose = popupBox.querySelector("header i"),
addBtn = popupBox.querySelector(".popbtn"),
titleTag = popupBox.querySelector("input"),
descTag = popupBox.querySelector("textarea");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]

// getting local storage notes if exist and parsingthem
//to js object else passing an empty array to notes
const notes =JSON.parse(localStorage.getItem ("notes") || "[]");



addBox.addEventListener("click", () => {
    popupBox.classList.add("show");
});

btnClose.addEventListener("click", () => {
    titleTag.value="";
    descTag.value="";
    popupBox.classList.remove("show");
});

// add notes JScode
function showNotes() {
    document.querySelectorAll(".notes").forEach(notes => notes.remove());
    notes.forEach((notes) => {
       let sampleTag = 
//         <div class="child" id="box2"> 
//         <div class="noteTitle">${notes.title}</div> 
//  <p class="noteDetail">${notes.description}</p>
//  <div class="space"></div>
//  <div class="btnEllipsis">
//      <p id="date">${notes.date}</p>
//  <button class="dots"><i class="fa fa-ellipsis-h"></i></button>
// </div>

`<div class="child" id="child"> 
<div class="noteTitle">${notes.title}</div> 
<p class="noteDetail">${notes.description}</p>
<div class="space"></div>
<div class="btnEllipsis">
<p id="date">${notes.date}</p>
<button class="dots"><i class="fa fa-ellipsis-h"></i></button>
</div>
</div>`
;
addBox.insertAdjacentHTML("afterend", sampleTag);
    });
}
// showNotes();

// pop up will show when clicked:

addBtn.addEventListener("click", e => {
    e.preventDefault()
    let popTitle = titleTag.value,
    descArea = descTag.value; 
    console.log(popTitle, descArea);


    if (popTitle || descArea) {
        let dateObj = new Date();
        month = months[dateObj.getMonth()],
        day = dateObj.getDate(),
        year = dateObj.getFullYear();

        let NoteInfo = {
            title: popTitle, 
            description: descArea,
            date: `${month} ${day},${year}`
        }
       
        notes.push(NoteInfo);
        localStorage.setItem("notes", JSON.stringify(notes));
        btnClose.click();
        showNotes();
        
    }
   

});




 