// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado"); // Agrega esta línea

function agregarAmigo() { // Corrige 'funtion' por 'function'
    listaAmigos.push(inputAmigo.value);
    // ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + inputAmigo.value; // Corrige 'innerHTLM' por 'innerHTML' si lo usas
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
}

function sortearAmigo() {
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}

//console.log(Math.floor((Math.random()*3)))

