var light_on = document.getElementById("light_on")//get on button element
var light_off = document.getElementById("light_off") //get off button element
const img = document.querySelector('img'); // Get the image element


light_on.addEventListener("click",function()
{ img.src = 'ONbulb.jpg';
light_on.disabled = true;
light_off.disabled = false;
})

light_off.addEventListener("click",function()
{ img.src = "OFFbulb.jpg"
light_on.disabled = false;
light_off.disabled = true;
})


