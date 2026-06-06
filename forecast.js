const canvas =
document.getElementById("forecastChart");

if(canvas){

new Chart(canvas,{

type:"bar",

data:{
labels:[
"Tomatoes",
"Beans",
"Maize",
"Cabbage"
],

datasets:[{

label:"Demand Forecast",

data:[
90,
75,
60,
50
]

}]
}

});

}