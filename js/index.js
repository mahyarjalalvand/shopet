"use strict";
const boxs = document.querySelectorAll(".box")
let category = null;
const filterHandler = (event) => {
    category = event.target.innerText;
    // console.log(category)
    boxs.forEach((box) => {
        if (box.innerText == category) {
            box.classList.add("selected")
        } else {
            box.classList.remove("selected");
        }
    })
}

boxs.forEach((box) => {
    box.addEventListener("click", filterHandler)
})