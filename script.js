const tarjetasTrabajo = document.querySelectorAll('.trabajo-item');
const modal = document.getElementById('trabajosModal');
const botonCerrar = document.querySelector('.modal-cerrar');

const modalImagen = document.getElementById('modalImagen');
const modalTitulo = document.getElementById('modalTitulo');
const modalDescripcion = document.getElementById('modalDescripcion');
const modalBotonAlbum = document.getElementById('modalBotonAlbum');

const menuToggle = document.getElementById('menu-toggle'); //el boton
const navMenu = document.getElementById('nav-menu'); //el menu, el contenedor de los links
const navLinks = document.querySelectorAll('.nav-link'); //lista de links
// 2. Escuchar el clic en cada una de las tarjetas
tarjetasTrabajo.forEach(tarjeta => { //el forEach hace que a cada una de las tarjetas que estan contenidas en el tarjetasTrabajo, le de una funcion
    tarjeta.addEventListener('click', () => {

        const rutaImagen = tarjeta.querySelector('img').src;
        

        const titulo = tarjeta.dataset.titulo;
        const descripcion = tarjeta.dataset.descripcion;
        const linkAlbum = tarjeta.dataset.album;

        modalImagen.src = rutaImagen;
        modalTitulo.innerText = titulo;
        modalDescripcion.innerText = descripcion;
        modalBotonAlbum.href = linkAlbum;

        
        modal.classList.add('activo');//agregamos esta clase asi se puede mostrar, ya q en el css a esta clase le damos opacidad
    });
});


botonCerrar.addEventListener('click', () => {
    modal.classList.remove('activo');//chau modal
});


modal.addEventListener('click', (e) => { //e de event, e guarda toda la info que recopila js cuando alguien hace cluick
    if (e.target === modal) { //si hace click afuera del modal tambien desaparece
        modal.classList.remove('activo');
    }
});



//tasty
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('activo');
    

    const icono = menuToggle.querySelector('i');
    if (navMenu.classList.contains('activo')) {
        icono.className = 'bx bx-x';
    } else {
        icono.className = 'bx bx-menu';
    }
});

//para q se cierre el menu si hace click en otro lado
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('activo');
        menuToggle.querySelector('i').className = 'bx bx-menu';
    });
});