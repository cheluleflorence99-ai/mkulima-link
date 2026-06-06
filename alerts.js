const alertForm =
document.getElementById("alertForm");

if(alertForm){

alertForm.addEventListener("submit", function(e){

e.preventDefault();

alert("Price Alert Created Successfully");

});

}