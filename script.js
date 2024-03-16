//SCROLL TO ABOUT ME

document.addEventListener('DOMContentLoaded', function() {
    const aboutMeLink = document.querySelector('a[href="#about-me"]');

    aboutMeLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace (navegar a otra página)

        const aboutMeSection = document.getElementById('about-me');
        const sectionOffset = aboutMeSection.offsetTop; // Obtén la distancia desde la parte superior del documento hasta la sección "About Me"

        window.scrollTo({
            top: sectionOffset,
            behavior: 'smooth' // Realiza un scroll suave
        });
    });
});

//SCROLL TO CONTACT

document.addEventListener('DOMContentLoaded', function() {
    // Verificar si la página actual es "contact.html"
    if (window.location.pathname.includes("contact.html")) {
        const contactLink = document.querySelector('a[href="contact.html"]');
        
        contactLink.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace (navegar a otra página)
        
            const contactSection = document.getElementById('contact');
            const sectionOffset = contactSection.offsetTop; // Obtén la distancia desde la parte superior del documento hasta la sección "Contact"
        
            window.scrollTo({
                top: sectionOffset,
                behavior: 'smooth' // Realiza un scroll suave
            });
        });
    }
});

//MENU NAVEGACION

let menu_responsive = document.querySelector(".menu-icon");

menu_responsive.onclick = function () {
  navmenu = document.querySelector(".nav-menu");
  navmenu.classList.toggle("active");

};

let menu_responsive_page = document.querySelector(".menu");

menu_responsive_page.onclick = function () {
  setTimeout(function() {
    navmenu.classList.remove("active");
  }, 150); // Cambia este valor al mismo que uses en tu transición CSS si es diferente

};


//SLIDER

// Selecciona todas las imágenes dentro del slider
const slides = document.querySelectorAll('.slider img');
let currentSlide = 0;

// Función para mostrar el siguiente slide
function nextSlide() {
  slides[currentSlide].style.opacity = 0; // Oculta el slide actual
  currentSlide = (currentSlide + 1) % slides.length; // Incrementa el índice del slide actual
  slides[currentSlide].style.opacity = 1; // Muestra el nuevo slide
}

// Mostrar el primer slide
slides[currentSlide].style.opacity = 1;

// Configurar un intervalo para cambiar de slide automáticamente
setInterval(nextSlide, 7000); // Cambia de slide cada 7 segundos (7000 milisegundos)

//VIEW MORE

document.addEventListener('DOMContentLoaded', function() {
    const moreButton = document.getElementById('view-more-btn');
    const cardContainer = document.querySelector('.card-gallery');
    const initialCardCount = 6; // Número inicial de cards

    moreButton.addEventListener('click', function() {
        // Crear tres nuevas cards
        for (let i = 0; i <3 ; i++) {
            const newCard = document.createElement('div');
            newCard.classList.add('card');
            newCard.innerHTML = `
                <img src="imagenes/image_works.jpg" alt="Work ${i+10}">            
                 <h3>Work ${i+10}</h3>            
                 `;
        

            // Agrega la nueva card al contenedor de cards
            cardContainer.appendChild(newCard);

            // Mostrar la nueva card con una pequeña demora para permitir que se aplique la transición
            setTimeout(() => {
                newCard.style.transform = 'translateY(0)'; // Desplazar hacia abajo
            }, 50 * i);
        }
    });
});

//BACK TO TOP

// Función para desplazarse suavemente hacia la parte superior de la página

document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('back-to-top');

    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Desplazamiento suave
        });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });
});



//CONTACTO FORMULARIO

document.addEventListener('DOMContentLoaded', function() {
    var formularioContacto = document.getElementById('form');

    formularioContacto.addEventListener('submit', function(event) {
        event.preventDefault();

        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var mensaje = document.getElementById('mensaje').value;

        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Asunto:', subject);
        console.log('Mensaje:', mensaje);

        formularioContacto.reset();
    });
});