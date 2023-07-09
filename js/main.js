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