function openModal(url) {
    var modal = document.getElementById("myModal");
    var modalIframe = document.getElementById("modalIframe");

    // Establece la URL del iframe
    modalIframe.src = url;

    // Muestra el modal
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    var modalIframe = document.getElementById("modalIframe");

    // Oculta el modal
    modal.style.display = "none";

    // Limpia la URL del iframe
    modalIframe.src = "";
}

// Cierra el modal si se hace clic fuera de él
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
}
