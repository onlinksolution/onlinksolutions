const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const header = document.getElementById('header-nav')
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 1) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)