let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const amigo = input.value.trim();

    if (amigo === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (amigos.includes(amigo)) {
        alert("Este nombre ya ha sido añadido.");
        return;
    }
    amigos.push(amigo);
    const listaAmigos = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
    input.value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    const ganador = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById('resultado');
    const liResultado = document.createElement('li');
    liResultado.textContent = `El ganador es: ${ganador}`;
    resultado.innerHTML = '';
    resultado.appendChild(liResultado);
}
