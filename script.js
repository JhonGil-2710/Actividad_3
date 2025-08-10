
document.addEventListener("DOMContentLoaded", function(){
    const newsContainer = document.getElementById("news-container");
    fetch("news.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(noticia => {
                const div = document.createElement("div");
                div.classList.add("alert", "alert-info");
                div.textContent = noticia.titulo + " - " + noticia.fecha;
                newsContainer.appendChild(div);
            });
        });

    document.getElementById("contact-form").addEventListener("submit", function(e){
        e.preventDefault();
        alert("Mensaje enviado correctamente!");
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        let isValid = true;
        
        // Validar el campo de nombre
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            alert('Por favor, ingresa tu nombre.');
            isValid = false;
        }

        // Validar el campo de email
        const email = document.getElementById('email');
        const emailPattern = /^[^s@]+@[^s@]+.[^s@]+$/;
        if (!emailPattern.test(email.value)) {
            alert('Por favor, ingresa un email válido.');
            isValid = false;
        }

        // Validar el campo de mensaje
        const message = document.getElementById('message');
        if (message.value.trim() === '') {
            alert('Por favor, ingresa un mensaje.');
            isValid = false;
        }
        
        if (!isValid) {
            // Prevenir el envío del formulario si no es válido
            event.preventDefault();
        } else {
            alert('¡Formulario enviado con éxito!');
            form.reset(); // Limpiar el formulario después del envío
        }
    });
});