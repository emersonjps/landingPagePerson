// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// ScrollTrigger.normalizeScroll(true);

console.log("Emerson 2023");
// gsap.to(["#skill", "#competence", "#footer_description"], {
//   opacity: 0,
//   duration: 0,
// });
gsap.from("#main", { opacity: 0, duration: 2 });

// // create the smooth scroller FIRST!
// let smoother = ScrollSmoother.create({
//   smooth: 2,
//   effects: true,
// });

// // pin box-c when it reaches the center of the viewport, for 300px
// ScrollTrigger.create({
//   trigger: ".box-c",
//   pin: true,
//   start: "center center",
//   end: "+=300",
//   markers: true,
// });
