// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = "";
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía, agrega al menos un nombre.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `<li>🎉El amigo secreto es: <strong>${amigos[indice]}</strong></li>`;
}

