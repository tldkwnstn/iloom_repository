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
});

// box-4 : 와이어프레임 아이템
gsap.to(".box-1", { x: 300 });
gsap.from(".section-5 > .box-4 > img",{

opacity:0,
x:700,
duration:1,
scrollTrigger:{
  trigger:'.section-5',
  markers:true
}
});
