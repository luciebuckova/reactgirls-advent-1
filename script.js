const progress = document.querySelector('.progress');
const card = document.querySelector('.card');

gsap.to(progress, {
  width: '100%',
  duration: 2,
  ease: 'power4.out',
});

gsap.from('h1', {
  y: -500,
  duration: 2,
  ease: 'elastic.out(1, 0.3)',
});

gsap.to(progress, {
  height: '100%',
  top: 0,
  delay: 2,
  backgroundColor: '#45c8e0',
});

gsap.from(card, {
  display: 'none',
  y: -500,
  delay: 3,
  duration: 2,
  ease: 'elastic.out(1, 0.3)',
});
