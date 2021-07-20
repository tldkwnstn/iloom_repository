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
  ease:Power2.easeIn,
  opacity:0,
  y:500,
  duration:2,
  scrollTrigger:{
    trigger:'.section-3',
    markers:true,
    start:'0%, 50%',
    end:'80%, 30%',
    // 내려가면서 만났을 때, 내려가면서 지나쳤을 때, 올라가면서 만났을 때, 올라가면서 지나쳤을 때
    // onEnter, onLeave, onEnterBack and on LeaveBack
    toggleActions:'restart none none none '
  }
})
