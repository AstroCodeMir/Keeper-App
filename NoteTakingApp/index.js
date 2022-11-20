
let addBox = document.querySelector(".addBox"),
popupBox = document.querySelector(".pop-up"),
btnClose = popupBox.querySelector("header i"),
addBtn = popupBox.querySelector(".popbtn"),
titleTag = popupBox.querySelector("input"),
descTag = popupBox.querySelector("textarea");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]

addBox.addEventListener("click", () => {
    popupBox.classList.add("show");
});

btnClose.addEventListener("click", () => {
    popupBox.classList.remove("show");
});

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
            title: popTitle, description: descArea,
            date: `${month}${day},${year}`
        }
        console.log(NoteInfo);
    }
   

});




 