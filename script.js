// Seleccionar todos los elementos con la clase "reveal"
const reveals = document.querySelectorAll(".reveal");

// Función que se ejecuta cada vez que el usuario hace scroll
window.addEventListener("scroll", () => {
    // Recorrer todos los elementos con la clase "reveal"
    reveals.forEach(element => {
        // Obtener la altura de la ventana
        const windowHeight = window.innerHeight;
        // Obtener la distancia del elemento desde la parte superior de la ventana
        const elementTop = element.getBoundingClientRect().top;

        // Si el elemento está dentro de la ventana, activar la animación
        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
});