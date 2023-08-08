gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
if(ScrollTrigger.isTouch !== 1) {
  
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
  })
}
gsap.fromTo('.go-up span', {y: '110%'}, {y: 0, ease: "Power4.easeOut", duration: 2 }, '<')

// about section
const tlAbout = gsap.timeline({
  scrollTrigger:{
    trigger: '.about',
    start: '-70%',
    end: '0%',
  }
})
tlAbout.fromTo('.about--bg', { opacity: 0 }, { opacity: 1, ease: "Power4.easeOut", duration: 2.35 }, )
tlAbout.fromTo('.about__content--title span', {y: '110%'}, {y: 0, ease: "Power4.easeOut", duration: 1.75 }, '<20%')
tlAbout.fromTo('.about__content--info span', { opacity: 0,}, { opacity: 1, ease: "Power4.easeOut", duration: 1.75 }, '<')