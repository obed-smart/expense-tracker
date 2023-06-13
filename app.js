const inputdate = document.getElementById("input-date");
const inputselect = document.getElementById("input-select");
const inputnumber = document.getElementById("input-number");
const inputdescrip = document.getElementById("input-descrip");
const trackerButton = document.getElementById("track-btn");
const myTable = document.getElementById("tacker-table");
const tablebody = document.getElementsByTagName("tbody")[0];

trackerButton.addEventListener("click",()=>{

    myTable.appendChild(tablebody);
    let tableRow = myTable.insertRow();
    let tableCell1 = tableRow.insertCell();
    let tableCell2 = tableRow.insertCell();
    let tableCell3 = tableRow.insertCell();
    let tableCell4 = tableRow.insertCell();

tableCell1.innerHTML = inputdate.value;
tableCell2.innerHTML = inputselect.value;
tableCell3.innerHTML = inputnumber.value;
tableCell4.innerHTML = inputdescrip.value;

inputdate.value = ""; 
inputselect.value = ""; 
inputnumber.value = ""; 
inputdescrip.value = ""; 


let removeRow = document.createElement("SPAN");
removeRow.innerHTML = "✖"
removeRow.style.cursor = "pointer"
tableRow.appendChild(removeRow)

})

.addEventListener("click",(e)=>{
if(e.target.tagName === "SPAN"){
    e.target.perentElement.remove();
}
})