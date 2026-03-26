/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


// menu show 
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// menu hidden
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link we remove the show-menu class 
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    // add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)

/*=============== SWIPER POPULAR ===============*/
const swiperPopular = new Swiper('.popular__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
  });

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUpEl = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, show the show-croll element
    
    this.scrollY >= 350 ? scrollUpEl.classList.add('show-scroll')
                        : scrollUpEl.classList.remove('show-scroll')

}
window.addEventListener('scroll', scrollUp) 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]') //every section having an id
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		} else {
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== LOAD PLAYERS FROM JSON ===============*/
const loadPlayers = async () => {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        const playersContainer = document.getElementById('players-container');

        if (playersContainer && data.players) {
            playersContainer.innerHTML = ''; // Limpiar contenedor
            
            // Cargar Director Técnico primero
            if (data.coach) {
                const coachCard = `
                    <article class="products__card coach__card">
                        <img src="${data.coach.img}" alt="${data.coach.name}" class="products__img">
                        <h3 class="products__name">${data.coach.name} <br> ${data.coach.position}</h3>
                        <span class="products__price">DT</span>
                        <button class="products__button">
                            <i class="ri-clipboard-line"></i>
                        </button>
                    </article>
                `;
                playersContainer.insertAdjacentHTML('beforeend', coachCard);
            }

            // Cargar Jugadores
            data.players.forEach(player => {
                const playerCard = `
                    <article class="products__card">
                        <img src="${player.img}" alt="${player.name}" class="products__img">
                        <h3 class="products__name">${player.name} <br> ${player.position}</h3>
                        <span class="products__price">${player.number}</span>
                        <button class="products__button">
                            <i class="ri-shield-user-line"></i>
                        </button>
                    </article>
                `;
                playersContainer.insertAdjacentHTML('beforeend', playerCard);
            });
        }
    } catch (error) {
        console.error('Error cargando jugadores:', error);
    }
}

// Llamar a la función al cargar el DOM
document.addEventListener('DOMContentLoaded', loadPlayers);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    // reset: true,  //  animations repeat 
})

sr.reveal(`.home__data, .popular__container, .footer`)

