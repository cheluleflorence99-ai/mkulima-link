const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup", function(){

let filter =
this.value.toLowerCase();

let rows =
document.querySelectorAll("#priceTable tr");

rows.forEach((row,index)=>{

if(index===0) return;

let crop =
row.cells[0].textContent.toLowerCase();

row.style.display =
crop.includes(filter)
? ""
: "none";

});

});

}