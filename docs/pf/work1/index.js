// box-1 : 개요 아이템
gsap.to(".box-1", { x: 700 },1);

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
    trigger:'.section-3'
  }
})


// box-4 : 와이어프레임 아이템
gsap.from(".box-4", {
  opacity:0,
  x:700,
  duration:1,
  scrollTrigger:{
    trigger:'.section-5',
    markers:true
  }
  });
  

// box-5 : 알고리즘 핸드폰
gsap.from('.box-5', {
  ease:Expo.easeIn,
  opacity:0,
  x:700,
  duration:1.2,
  scrollTrigger:{
    trigger:'.box-5',
    markers:true
  }
});

// box-6 : 알고리즘 조사창
gsap.from('.box-6', {
  ease:Expo.easeIn,
  opacity:0,
  x:680,
  duration:1.3,
  scrollTrigger:{
    trigger:'.box-5',
    markers:true
  }
});
