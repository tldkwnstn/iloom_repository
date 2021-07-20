gsap.to(".box-1", { x: 300 });


// img-3 : 로고 아이템
gsap.from('.img-3', {
  ease:Expo.easeIn,
  opacity:0,
  y:500,
  duration:2,
  scrollTrigger:{
    trigger:'.section-3'
  }
})