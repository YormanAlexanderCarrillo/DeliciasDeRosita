// Función para mostrar secciones
function showSection(sectionName) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    document.getElementById(sectionName).classList.add('active');

    // Actualizar botones de navegación
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Función para mostrar tabs de galería
function showGalleryTab(tabName) {
    // Ocultar todos los tabs de galería
    const galleryTabs = document.querySelectorAll('.gallery-tab');
    galleryTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Mostrar el tab seleccionado
    document.getElementById(tabName).classList.add('active');

    // Actualizar botones de tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Manejar el envío del formulario
document.addEventListener('DOMContentLoaded', function () {
    // Formulario de opiniones
    const opinionForm = document.getElementById('opinionForm');
    if (opinionForm) {
        opinionForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const telefono = document.getElementById('telefono').value;
            const opinion = document.getElementById('opinion').value;

            // Número de WhatsApp del negocio
            const numeroWhatsApp = '573203402628';

            // Crear el mensaje
            const mensaje = `¡Hola! Soy ${nombre}
            
Mi número de teléfono es: ${telefono}

Mi opinión sobre Las Delicias de Rosita:
${opinion}

¡Gracias por sus deliciosos productos! 🧁✨`;

            // Codificar el mensaje para URL
            const mensajeCodificado = encodeURIComponent(mensaje);

            // Crear la URL de WhatsApp
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

            // Abrir WhatsApp
            window.open(urlWhatsApp, '_blank');

            // Limpiar el formulario
            opinionForm.reset();

            // Mostrar mensaje de confirmación con estilo
            showNotification('¡Gracias por tu opinión! Te estamos redirigiendo a WhatsApp.', 'success');
        });
    }

    // Animaciones al hacer scroll
    const observeElements = () => {
        const elements = document.querySelectorAll('.product-card, .intro-card, .specialty-card, .gallery-item, .value-item, .contact-item');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                }
            });
        }, {
            threshold: 0.1
        });

        elements.forEach(element => {
            observer.observe(element);
        });
    };

    // Iniciar observador después de un pequeño delay
    setTimeout(observeElements, 100);
});

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✅' : 'ℹ️'}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;

    // Estilos para la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #4caf50, #45a049)' : 'linear-gradient(135deg, #2196f3, #1976d2)'};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
        font-weight: 600;
    `;

    // Agregar al DOM
    document.body.appendChild(notification);

    // Remover después de 4 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Animación de entrada
window.addEventListener('load', function () {
    const container = document.querySelector('.container');
    if (container) {
        container.style.animation = 'fadeIn 1s ease-in';

        // Animación secuencial para elementos del hero
        const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-image-placeholder');
        heroElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            setTimeout(() => {
                element.style.transition = 'all 0.6s ease-out';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 200 + (index * 200));
        });
    }
});


function showSection(sectionName) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    document.getElementById(sectionName).classList.add('active');

    // Actualizar botones de navegación
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Manejar el envío del formulario
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('opinionForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const opinion = document.getElementById('opinion').value;

        // Número de WhatsApp del negocio
        const numeroWhatsApp = '573203402628';

        // Crear el mensaje
        const mensaje = `¡Hola! Soy ${nombre}
        
Mi número de teléfono es: ${telefono}

Mi opinión sobre Las Delicias de Rosita:
${opinion}

¡Gracias por sus deliciosos productos! 🧁✨`;

        // Codificar el mensaje para URL
        const mensajeCodificado = encodeURIComponent(mensaje);

        // Crear la URL de WhatsApp
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

        // Abrir WhatsApp
        window.open(urlWhatsApp, '_blank');

        // Limpiar el formulario
        document.getElementById('opinionForm').reset();

        alert('¡Gracias por tu opinión! Te estamos redirigiendo a WhatsApp.');
    });
});

window.addEventListener('load', function () {
    document.querySelector('.container').style.animation = 'fadeIn 1s ease-in';
});

function toggleText(id) {
    const text = document.getElementById(id);
    const btn = text.previousElementSibling;
    if (text.style.display === 'block') {
      text.style.display = 'none';
      btn.textContent = btn.textContent.replace('Ocultar', 'Mostrar');
    } else {
      text.style.display = 'block';
      btn.textContent = btn.textContent.replace('Mostrar', 'Ocultar');
    }
  }
