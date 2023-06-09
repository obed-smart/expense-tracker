const inputDiv = document.getElementById("track-main");
const inputdate = document.getElementById("input-date");
const inputselect = document.getElementById("input-select");
const inputnumber = document.getElementById("input-number");
const inputdescrip = document.getElementById("input-descrip");
const trackerButton = document.getElementById("track-btn");
const myTable = document.getElementById("tacker-table");
const tablebody = myTable.getElementsByTagName("tbody")[0];


trackerButton.addEventListener("click", () => {

    const datevalue = inputdate.value;
    const selectvalue = inputselect.value;
    const numbervalue = inputnumber.value;
    const descripvalue = inputdescrip.value;

    if (datevalue || selectvalue || numbervalue || descripvalue !== "") {
        createTd();
    }

})
// document.body.addEventListener("keypress", (e) => {
//     if (e.key === "H") {
//         inputDiv.style.display = "none";
//         let hideAction = document.getElementById("hide-action");
//         hideAction.style.display = "none";

//     } else if (e.key === "S") {
//         let hideAction = document.getElementById("hide-action");
//         hideAction.style.display = "block";
//         inputDiv.style.display = "block";

//     }
// })

// TO CREATE A NEW TABLE ROW AND CELL WITH THE TABLE DATA APPEBDED TO IT 
let createTd = () => {
    let newRow = tablebody.insertRow();
    newRow.classList.toggle("color");
    let tableCell1 = newRow.insertCell();
    let tableCell2 = newRow.insertCell();
    let tableCell3 = newRow.insertCell();
    let tableCell4 = newRow.insertCell();
    let tableCell5 = newRow.insertCell();

    tableCell1.innerHTML = inputdate.value;
    tableCell2.innerHTML = inputselect.value;
    tableCell3.innerHTML = inputnumber.value;
    tableCell4.innerHTML = inputdescrip.value;

    // TO FORMAT THE CURRENCY TO BE ABLE TO SHOW SIGNS AND CURMER
    let currencyFormater = new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
    })
    tableCell3.innerHTML = currencyFormater.format(inputnumber.value);

    inputdate.value = "";
    inputselect.value = "";
    inputnumber.value = "";
    inputdescrip.value = "";

    let action = document.createElement("div");
    action.className = "actionbtn";
    let deletebutton = document.createElement("button");
    deletebutton.innerHTML = "✖"
    deletebutton.className = "btn"
    let edit = document.createElement("span");
    edit.innerText = "🖋 "
    action.append(deletebutton, edit);
    tableCell5.appendChild(action);

    tableCell5.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            e.target.parentElement.parentElement.parentElement.remove();
        } else if (e.target.tagName === "SPAN") {
            tableCell1.contentEditable = "true"
            tableCell2.contentEditable = "true"
            tableCell3.contentEditable = "true"
            tableCell4.contentEditable = "true"
        } else {
            tableCell1.contentEditable = "false";
            tableCell2.contentEditable = "false";
            tableCell3.contentEditable = "false";
            tableCell4.contentEditable = "false";
        }
    })
}
// this code is for dark theme and its functions
const darkMood = document.getElementById("darkmood");
const container = document.getElementById("container");

darkMood.addEventListener("click", (e) => {
    if (e.target.innerHTML === "Dark mood") {
        container.style.background = "#121212";
        darkMood.innerHTML = "light mood";
        inputDiv.style.background = "transparent";
        trackerButton.style.background = "#BB86fc";
        trackerButton.style.color = "#000";
        trackerButton.style.fontWeight = 600;
        trackerButton.style.fontSize = "14px";
    } else if (e.target.innerHTML === "light mood") {
        container.style.background = "linear-gradient(132deg, rgb(141, 133, 139), #7b8385)";
        darkMood.innerHTML = "Dark mood";
        inputDiv.style.background = "transparent";
        trackerButton.style.background = "blueviolet";
        trackerButton.style.border = "none";
        trackerButton.style.fontSize = "14px";
        trackerButton.style.color = "#fff";

    }
})
