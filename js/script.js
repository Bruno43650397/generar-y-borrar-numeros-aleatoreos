let numerosGenerados = [];
let contadorId = 1;

function obtenerValor(id) {
    return parseInt(document.getElementById(id).value) || 1;
}
function generarNumero() {
    const desde = obtenerValor("desdeInput");
    const hasta = obtenerValor("hastaInput");
    const cantidad = obtenerValor("cantidadInput");

    for (let i = 0; i < cantidad; i++) {
        const numeroAleatorio = Math.floor(Math.random() * (hasta - desde + 1)) + desde;
        numerosGenerados.push({ id: contadorId++, numero: numeroAleatorio });
    }
    actualizarTabla();
}
function eliminarNumero(id) {
    numerosGenerados = numerosGenerados.filter(num => num.id !== id);
    actualizarTabla();
}
function eliminarNumeros() {
    numerosGenerados = [];
    actualizarTabla();
}
function actualizarTabla() {
    const tablaCuerpo = document.getElementById("numeroCuerpo");
    tablaCuerpo.innerHTML = "";

    for (const { id, numero } of numerosGenerados) {
        const fila = tablaCuerpo.insertRow();
        fila.insertCell(0).textContent = id;
        fila.insertCell(1).textContent = numero;

        const celdaBoton = fila.insertCell(2);
        const botonEliminar = document.createElement("button");
        botonEliminar.className = "btn btn-sm btn-danger";
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = () => eliminarNumero(id);

        celdaBoton.appendChild(botonEliminar);
    }
}

