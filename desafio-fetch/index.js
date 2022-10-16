let box = document.getElementById("box");
let btn = document.getElementById("btn");


btn.addEventListener("click", async ()=>{
    try {
        const response= await fetch("./api.json")
        const data = await response.json();

        data.forEach(item => {
            let div = document.createElement("div");
            div.innerHTML = `
                <h1>ID: ${item.id}</h1>
                <p>Producto: ${item.nombre}</p>
                <b>Precio: $${item.precio}</b>
                <img src="${item.url}" style="height: 200px;width 200px;">
            `;
            box.append(div);
        });
    } catch (error) {
        console.log(error);
    }
});