document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const nombreUsuario = urlParams.get('nombre');
    const cedulaUsuario = urlParams.get('cedula');
    const titulo = document.querySelector("h1");

    if (nombreUsuario && cedulaUsuario) {
        titulo.innerHTML = `🐾 Hola ${nombreUsuario} (${cedulaUsuario}), aquí están los Perritos en Busca de un Hogar`;
    }
});
