let timeLine1 = gsap.timeline({
   scrollTrigger: {
      trigger: ".home",
      start: "0%",
      end: "80%",
      scrub: 1,
   },
});

let timeLine2 = gsap.timeline({
   scrollTrigger: {
      trigger: ".home",
      start: "0%",
      end: "60%",
      scrub: 1,
      pin: true,
   },
});



let timeLine4 = gsap.timeline({
   scrollTrigger: {
      trigger: ".home",
      start: "0%",
      end: "80%",
      scrub: 1,
      pin: true,
   },
});



timeLine1.fromTo(".sliding-text", { y: 0 }, { y: -400 });
timeLine2.fromTo(
   ".logo",
   { scale: 6 },
   { scale: 1, top: "1rem", left: "2rem", x: "50%", y: "50%" }
   );

   
let timeLine3 = gsap.timeline({
   scrollTrigger: {
      trigger: ".home",
      start: "0%",
      end: "200%",      
      pin: true,
      pinSpacing: false,
   },
});


   
timeLine4.fromTo(".square", {left: "70%"}, {left: "100%", opacity: 0, rotate: 90});