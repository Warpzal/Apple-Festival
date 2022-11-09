// =================================================================
// CAROUSEL

// Where the images folder is located relative to this file
const path = './images/'

// The first item will be the first to show in the Carousel
const images = ['apple-basket-many.jpg', 'commons-far.jpg']

// Initialize the Carousel with an image when the page loads
$('.carousel__image').attr("src", `${path}${images[0]}`)

function useCarousel(direction) {
    if (direction === 'next') images.unshift(images.pop());
    else images.push(images.shift())

    $('.carousel__image').attr('src', `${path}${images[0]}`)
}

// Event Listeners
$('.carousel__arrow--left').click(() => useCarousel('prev'))
$('.carousel__arrow--right').click(() => useCarousel('next'))

// Auto change slide after 5s
setInterval(() => {
    useCarousel('next')
}, 5000)

// =================================================================
// ACCORDION

const items = document.querySelectorAll('.accordion__item')
items.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('open')) {
            item.classList.remove('open')
            return
        }

        // Close all other accordions
        items.forEach(item => item.classList.remove('open'))
        item.classList.add('open')
    })
})

// =================================================================
// Mobile Nav
$('.hamburger-menu-container').click(() => toggleMenu())

function toggleMenu() {
    $('.nav__items').toggleClass('hidden')
}

// Media Query - for when the window is resized
$(window).resize(() => {
    if ($(window).width() > 800) $('.nav__items').removeClass('hidden')
    else $('.nav__items').addClass('hidden')
})

// If we loadup on mobile
if ($(window).width() < 800) $('.nav__items').addClass('hidden')
