
const menu = document.querySelector('.menu')
const menuOpenBtn = document.querySelector('.navbar__burger')
const menuCloseBtn = document.querySelector('.menu__close')
// menu open
function menuOpen() {
  document.body.style.overflow = 'hidden'
  menu.classList.add('active')
}
// menu close
function menuClose() {
  document.body.style.overflow = 'unset'
  menu.classList.remove('active')
}

let pageWidth = window.innerWidth
console.log(window.innerWidth);
window.addEventListener('scroll', () => {
  console.log(window.pageYOffset);
})
const links = document.querySelectorAll('.link')
links.forEach((link, key) => {
  const scrollToElement = link.getAttribute('data-scroll')
  
  link.addEventListener('click', () => {
    if(scrollToElement == 'home' && pageWidth >= 576) {
      window.scrollBy(0, 0)
    } else if(scrollToElement == 'about' && pageWidth >= 576) {
      window.scrollBy(0, 720)
    } else if(scrollToElement == 'portfolio' && pageWidth >= 576) {
      window.scrollBy(0, 1700)
    } else if(scrollToElement == 'contacts' && pageWidth >= 576) {
      window.scrollBy(0, 2332)
    }
    menuClose()
  })
})

menuOpenBtn.addEventListener('click', menuOpen)
menuCloseBtn.addEventListener('click', menuClose)