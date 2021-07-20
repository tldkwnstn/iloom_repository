gsap.to(".img1", {
  x: 300
});

gsap.from(".section-2 > div:last-child > img", {
  ease: Expo.easeIn,
  opacity: 0,
  x: -300,
  duration: 1,
  scrollTrigger: {
    trigger: '.section-2'
  }
});
gsap.to(".box-1", { x: 300 });


// img-3 : 로고 아이템
gsap.from('.img-3', {
  ease:Expo.easeIn,
  opacity:0,
  y:400,
  duration:2,
  scrollTrigger:{
    trigger:'.section-3'
  }
})
