document.addEventListener("DOMContentLoaded", () => {

    Object.keys(lotes).forEach(id => {
console.log(id);
        const lote = document.getElementById(id);

        if (!lote) {
            console.warn(`No existe el objeto ${id} en el SVG.`);
            return;
        }
        const estado = lotes[id].estado.toLowerCase();

lote.classList.remove(
    "disponible",
    "apartado",
    "vendido"
);

if (estado === "disponible") {
    lote.style.fill = "#7CB342";   // Verde
}

if (estado === "apartado") {
    lote.style.fill = "#D4AF37";   // Dorado
}

if (estado === "vendido") {
    lote.style.fill = "#D32F2F";   // Rojo
}

        lote.style.cursor = "pointer";

        lote.addEventListener("click", () => {

// Quitar selección anterior
document.querySelectorAll("svg .seleccionado").forEach(el=>{
    el.classList.remove("seleccionado");
});

// Quitar selección anterior
document.querySelectorAll("svg [id^='lote']").forEach(el => {
    el.style.stroke = "#FFFFFF";
    el.style.strokeWidth = "2";
});

// Seleccionar lote actual
lote.style.stroke = "#FFD700";
lote.style.strokeWidth = "5";;
            const info = lotes[id];

console.log(info);

            document.getElementById("tituloLote").textContent =
                `Lote ${info.numero}`;

            document.getElementById("estado").textContent =
                info.estado;

            document.getElementById("superficie").textContent =
                info.superficie;

            document.getElementById("frente").textContent =
                info.frente;

            document.getElementById("fondo").textContent =
                info.fondo;

            document.getElementById("preciom2").textContent =
                info.precioM2;

            document.getElementById("precio").textContent =
                info.precioTotal;

                document.getElementById("enganche").textContent =
    info.enganche;

document.getElementById("mensualidad").textContent =
    info.mensualidad;
// ==============================
// BOTÓN DE WHATSAPP
// ==============================

const mensaje = `Hola, me interesa el Lote ${info.numero} del desarrollo Bosques de Metepec.

Estado: ${info.estado}
Superficie: ${info.superficie}
Precio: ${info.precioTotal}
Enganche: ${info.enganche}
Mensualidad: ${info.mensualidad}


¿Me podrían agendar una cita esta semana?`;

document.getElementById("btnWhatsapp").href =
    "https://wa.me/527131010200?text=" + encodeURIComponent(mensaje);

        }); // Cierra click

    }); // Cierra Object.keys().forEach
// ==============================
// CONTADORES
// ==============================

let disponibles = 0;
let vendidos = 0;
let apartados = 0;

Object.values(lotes).forEach(lote => {

    switch (lote.estado.toLowerCase()) {

        case "disponible":
            disponibles++;
            break;

        case "vendido":
            vendidos++;
            break;

        case "apartado":
            apartados++;
            break;
    }

});

document.getElementById("dispCount").textContent = disponibles;
document.getElementById("vendCount").textContent = vendidos;
});