document.addEventListener("DOMContentLoaded", function () {
    const downloadCV = document.getElementById("downloadBtn");

    if (downloadCV) {
        downloadCV.addEventListener("click", function () {
            const element = document.querySelector(".card");
            element.classList.add("export-pdf");

            const options = {
                margin: 0.5,
                filename: 'mi_cv.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, scrollY: 0 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            html2pdf().set(options).from(element).save();
            element.classList.remove("export-pdf");
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("commentForm");

    if (commentForm) {
        commentForm.addEventListener("submit", function (event) {
            event.preventDefault(); 

            const name = document.getElementById("name").value;
            const comment = document.getElementById("comment").value;

            if (!name || !comment) {
                alert("Por favor, completa todos los campos.");
                return;
            }

            emailjs.send("service_wxxphjq", "template_eromta1", {
                user_name: name,
                user_comment: comment,
            }, "2lDo-OBqlfRaGuw5C")
            .then(function (response) {
                alert("¡Comentario enviado con éxito!");
                commentForm.reset();
            })
            .catch(function (error) {
                alert("Hubo un error al enviar el comentario. Inténtalo de nuevo.");
                console.error("Error:", error);
            });
        });
    }
});