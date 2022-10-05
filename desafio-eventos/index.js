const button = document.querySelector("button");
const parrafo = document.querySelector("b");
const botontarea = document.querySelector("botontareas");
let autosuma = 0;
let form = document.querySelector("form");

button.addEventListener("click",() => {
    console.log("click");
    autosuma++;
    parrafo.textContent = autosuma;
});

addEventListener("submit", e=>{
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    alert("NOMBRE --- EMAIL --- TELEFONO " + JSON.stringify(data))
})