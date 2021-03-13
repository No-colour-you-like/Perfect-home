const footerImages = document.querySelector('.footer__images');

// footerImages.addEventListener('mousedown', event => {
//   footerImages.style.transform = 'translateX(0px)'
// });

footerImages.addEventListener('mousedown', event => {
  let mousePosition = event.clientX;
  event.style.transform = `translate(${mousePosition}px)`;
});