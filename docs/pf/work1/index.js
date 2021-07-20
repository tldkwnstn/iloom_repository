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