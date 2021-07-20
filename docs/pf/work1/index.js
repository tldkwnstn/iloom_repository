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