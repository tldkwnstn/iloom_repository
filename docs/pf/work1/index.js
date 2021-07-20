// box-1 : 개요 아이템
gsap.to(".box-1", { x: 700 });

// box-2 : 개요 아이템
gsap.from(".box-2", {
  ease: Expo.easeIn,
  opacity: 0,
  x: -300,
  duration: 1,
  scrollTrigger: {
    trigger: '.section-2'
  }
});

// box-3 : 로고 아이템
gsap.from('.box-3', {
  ease:Expo.easeIn,
  opacity:0,
  y:300,
  duration:1,
  scrollTrigger:{
    trigger:'.box-3'
  }
})
