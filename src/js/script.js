// Footer Slider
const footer = document.querySelector('.footer'),
  footerImages = document.querySelector('.footer__images-wrapper'),
  footerImage = document.querySelectorAll('.footer__top-image'),
  sliderPrev = document.querySelector('.footer__images-prev'),
  sliderNext = document.querySelector('.footer__images-next');
  

let offset = 0,
  width = window.getComputedStyle(footer).width;

footerImage.forEach(item => {
  item.style.width = (width.slice(0, width.length - 2) / 5 )+ 'px';
});

sliderNext.addEventListener('click', () => {
  if (offset == (+width.slice(0, width.length - 2) / 5) * (footerImage.length - 3)) {
    offset = 0;
  } else {
    offset += +width.slice(0, width.length - 2) / 5;
  }

  footerImages.style.transform = `translateX(-${offset}px)`;
});

sliderPrev.addEventListener('click', () => {
  if (offset == 0) {
    offset = (+width.slice(0, width.length - 2) / 5) * (footerImage.length - 3);
  } else {
    offset -= +width.slice(0, width.length - 2) / 5;
  }

  footerImages.style.transform = `translateX(-${offset}px)`;
});

// Open Image in Slider
const footerImg = document.querySelectorAll('.footer__top-img');

footerImg.forEach(item => {
  item.addEventListener('click', () => {

    if (!item.classList.contains('image-anim')) {
      footerImg.forEach((item) => {
        item.classList.remove('image-anim');
        item.classList.add('image-anim-remove');
      });
      item.classList.remove('image-anim-remove');
      item.classList.add('image-anim');
    } else {
      item.classList.remove('image-anim');
      item.classList.add('image-anim-remove');
    }
  });
});


const mainBlock = document.querySelector('.main'),
  welcomeImage = document.querySelector('.welcome__image'),
  welcomeText = document.querySelector('.welcome__text');

  
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {

    let scrollTop = window.scrollY;
    let mainCenter = mainBlock.offsetHeight / 2;

    if (scrollTop >= mainCenter) { 
      welcomeImage.classList.add('image-anim-1');
      welcomeText.classList.add('text-anim-1')
    } 
  });
});
  






