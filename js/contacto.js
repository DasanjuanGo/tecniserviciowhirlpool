const form = document.querySelector('.contact-form'); // Obtener referencia al formulario

// Agregar un evento al envío del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto

    // Obtener los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Crear el mensaje personalizado
    const encodedName = encodeURIComponent(name);
    const encodedEmail = encodeURIComponent(email);
    const encodedMessage = encodeURIComponent(message);
    const whatsappMessage = `¡Hola! Soy ${encodedName}. Mi correo de contacto es ${encodedEmail} y me gustaría contactarlos: "${encodedMessage}"`;

    // Construir la URL de redirección con el mensaje personalizado
    const whatsappURL = `https://api.whatsapp.com/send?phone=+573115721907&text=${whatsappMessage}`;

    // Redirigir al usuario a la página de WhatsApp con el mensaje personalizado
    window.location.href = whatsappURL;
});
