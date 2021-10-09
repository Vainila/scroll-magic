let timeLine = gsap.timeLine({
   scrollTrigger: {
      trigger: '.home',
      start: '0%',
      end: '100%',
      scrub: 1,
   },
});

timeLine.fromTo('.sliding-text', {y: 0}, {y: -400});

