//Main images change

const mainPhoto = document.querySelectorAll('.main-photo__img'),
  houseNumbers = document.querySelectorAll('.housename'),
  mainHomeBtn = document.querySelector('.main-houses__home'),
  mainPhotoHome = document.querySelector('.main-photo__home'),
  mainPhotoText = document.querySelector('.main-photo__text'),
  homeInfo = document.querySelectorAll('.home__text');

houseNumbers.forEach((housename, i) => {
  housename.addEventListener('click', () => {
    mainPhotoHome.classList.add('opacity-hide');
    mainPhotoText.classList.add('opacity-hide');
    mainPhoto.forEach(photo => {
      photo.classList.remove('opacity-visible');
      photo.classList.add('opacity-hide');
    });
    homeInfo.forEach(info => {
      info.classList.remove('info-transform-open');
      info.classList.add('info-transform-hide');
    });
    mainPhoto[i].classList.remove('opacity-hide');
    mainPhoto[i].classList.add('opacity-visible');
    homeInfo[i].classList.remove('info-transform-hide');
    homeInfo[i].classList.add('info-transform-open');
  });
});

mainHomeBtn.addEventListener('click', () => {
  mainPhoto.forEach(photo => {
      photo.classList.remove('opacity-visible');
      photo.classList.add('opacity-hide');
    });
  homeInfo.forEach(text => {
    text.classList.remove('info-transform-open');
    text.classList.add('info-transform-hide');
  });
    mainPhotoHome.classList.remove('opacity-hide');
    mainPhotoHome.classList.add('opacity-visible');
    mainPhotoText.classList.remove('opacity-hide');
    mainPhotoText.classList.add('opacity-visible');
});


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

// Scroll animation
const mainBlock = document.querySelector('.main'),
  welcomeImage = document.querySelector('.welcome__image'),
  welcomeText = document.querySelector('.welcome__text'),
  welcomeBlock = document.querySelector('.welcome'),
  stepsImageOne = document.querySelector('.steps__img-1'),
  stepsImageTwo = document.querySelector('.steps__img-2'),
  stepsText = document.querySelectorAll('.steps__step'),
  stepsBlock = document.querySelector('.steps'),
  agentImageOne = document.querySelector('.agent__image-1'),
  agentImageTwo = document.querySelector('.agent__image-2'),
  agentBlock = document.querySelector('.agent'),
  processImageOne = document.querySelector('.process__img-1'),
  processImageTwo = document.querySelector('.process__img-2');

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {

    let scrollTop = window.scrollY,
      mainCenter = mainBlock.offsetHeight / 2,
      welcomeCenter = mainBlock.offsetHeight + welcomeBlock.offsetHeight / 2;
      stepsCenter = mainBlock.offsetHeight + welcomeBlock.offsetHeight + stepsBlock.offsetHeight / 2;
      stepsBottom = mainBlock.offsetHeight + welcomeBlock.offsetHeight + stepsBlock.offsetHeight;
      agentBottom = mainBlock.offsetHeight + welcomeBlock.offsetHeight + stepsBlock.offsetHeight + agentBlock.offsetHeight;

    if (scrollTop >= mainCenter) { 
      welcomeImage.classList.add('image-anim-1');
      welcomeText.classList.add('text-anim-1');
    } 

    if (scrollTop >= welcomeCenter) { 
      stepsImageOne.classList.add('image-anim-1');
      stepsImageTwo.classList.add('image-anim-1');
    } 

    if (scrollTop >= stepsCenter) { 

      let firstStepAnim = (i) => {
        stepsText[i].classList.add('image-anim-1');
      };

      firstStepAnim(0);
      setTimeout(firstStepAnim, 500, 1);
      setTimeout(firstStepAnim, 1000, 2);
    } 

    if (scrollTop >= stepsBottom) { 

      agentImageOne.classList.add('image-anim-1');

      setTimeout(() => {
        agentImageTwo.classList.add('image-anim-1');
      }, 500);
    } 

    if (scrollTop >= agentBottom) { 
      processImageOne.classList.add('image-anim-1');
      processImageTwo.classList.add('image-anim-1');
    }
  });
});
  

let headerLink = document.querySelectorAll('.header__anchor-link');

headerLink.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    stepsBlock.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });

  });
});







