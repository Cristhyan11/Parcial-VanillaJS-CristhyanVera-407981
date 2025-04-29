document.addEventListener("DOMContentLoaded", function () {
    const downloadCV = document.getElementById("downloadBtn");

    if (downloadCV) {
        downloadCV.addEventListener("click", function () {
            // Seleccionamos solo el contenido de la tarjeta para exportar
            const element = document.querySelector(".card");

            // Configuración para la generación del PDF
            const options = {
                margin: 0.5,
                filename: 'mi_cv.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            // Generamos y descargamos el PDF
            html2pdf().set(options).from(element).save();
        });
    }
});
// Boton para enviar comentario a mi correo
document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("commentForm");

    if (commentForm) {
        commentForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Evita el envío predeterminado del formulario

            // Capturamos los datos del formulario
            const name = document.getElementById("name").value;
            const comment = document.getElementById("comment").value;

            // Validamos que los campos no estén vacíos
            if (!name || !comment) {
                alert("Por favor, completa todos los campos.");
                return;
            }

            // Configuración de EmailJS
            emailjs.send("service_wxxphjq", "template_eromta1", {
                user_name: name,
                user_comment: comment,
            }, "2lDo-OBqlfRaGuw5C") // Reemplaza "user_abc123" con tu clave pública de EmailJS
            .then(function (response) {
                alert("¡Comentario enviado con éxito!");
                commentForm.reset(); // Limpia el formulario
            })
            .catch(function (error) {
                alert("Hubo un error al enviar el comentario. Inténtalo de nuevo.");
                console.error("Error:", error);
            });
        });
    }
});