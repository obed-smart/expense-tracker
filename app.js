const inputdate = document.getElementById("input-date");
const inputselect = document.getElementById("input-select");
const inputnumber = document.getElementById("input-number");
const inputdescrip = document.getElementById("input-descrip");
const trackerButton = document.getElementById("track-btn");
const myTable = document.getElementById("tacker-table");
const tablebody = myTable.getElementsByTagName("tbody")[0];

trackerButton.addEventListener("click",()=>{

    

    let newRow = myTable.insertRow();
    newRow.className = "list";
    let tableCell1 = newRow.insertCell();
    let tableCell2 = newRow.insertCell();
    let tableCell3 = newRow.insertCell();
    let tableCell4 = newRow.insertCell();

tableCell1.innerHTML = inputdate.value;
tableCell2.innerHTML = inputselect.value;
tableCell3.innerHTML = inputnumber.value;
tableCell4.innerHTML = inputdescrip.value;


// inputdate.value = ""; 
// inputselect.value = ""; 
// inputnumber.value = ""; 
// inputdescrip.value = ""; 

let deletebutton = document.createElement("span");
    deletebutton.innerHTML ="✖"
    newRow.appendChild(deletebutton);
    deletebutton.addEventListener("click",(e)=>{
        if(e.target.tagName === "SPAN")
    e.target.parentElement.remove();
        })
    

})

