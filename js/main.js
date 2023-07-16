gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
console.log(gsap);
if(ScrollTrigger.isTouch !== 1) {
  
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
  })
  
  
}
gsap.fromTo('.header--title span', {y: '110%'}, {y: 0, ease: "Power4.easeOut", duration: 2 }, '<')
gsap.fromTo('.header__sub--title span', {y: '110%'}, {y: 0, ease: "Power4.easeOut", duration: 2 }, '<')
// gsap.fromTo('.header__sub--title span', {y: '110%'}, {y: 0, ease: "Power4.easeOut", duration: 2 }, '<')

const menu = document.querySelector('.menu')
const menuOpenBtn = document.querySelector('.navbar__burger')
const menuCloseBtn = document.querySelector('.menu__close')

menuOpenBtn.addEventListener('click', () => { 
  menu.classList.add('active')
  // gsap.to(menu, {h: '100vh', duration: 2, ease: "Power4.easeOut"})
})
menuCloseBtn.addEventListener('click', () => { 
  // gsap.to(menu, {h: '0', duration: 2, ease: "Power4.easeOut"})
  // setTimeout(() => {
  //   menu.removeAttribute('style')
  // }, 2000);
  menu.classList.remove('active') 
})