let x = document.getElementById("ele1");
// x.style.color = "yellow"
// x.style.backgroundColor = "red"
// x.innerHTML = "Jigglypuff";
x.addEventListener("click",function(){
    x.style.color = "yellow"
x.style.backgroundColor = "red"
x.innerHTML = "Jigglypuff";
})


let y = document.getElementById("ele2");
y.addEventListener("mousemove",function(){
    y.style.color = "yellow"
y.style.backgroundColor = "red"
y.innerHTML = "orange";
})

y.addEventListener("mouseleave",function(){
    y.style.color = "black"
y.style.backgroundColor = "white"
y.innerHTML="Charizard"
})


let z = document.getElementById("ele3");
y.addEventListener("click",function(){
    z.style.color = "white"
z.style.backgroundColor = "purple"
z.innerHTML = "orange";
})
