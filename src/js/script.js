//Header hamburger menu 

const headerHamburger = document.querySelector('.header__hamburger'),
  headerMenuClose = document.querySelector('.header__close-menu'),
  headerNav = document.querySelector('.header__nav');

headerHamburger.addEventListener('click', () => {
  headerNav.classList.add('header-menu-open')
});

headerMenuClose.addEventListener('click', () => {
  headerNav.classList.remove('header-menu-open')
});

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

const footerImgWrapper = document.querySelector('.footer__images-wrapper'),
  footerImages = document.querySelector('.footer__images-wrapper'),
  footerImage = document.querySelectorAll('.footer__top-image'),
  sliderPrev = document.querySelector('.footer__images-prev'),
  sliderNext = document.querySelector('.footer__images-next');
  

let offset = 0,
  width = window.getComputedStyle(footerImgWrapper).width;

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

let mainBlock = document.querySelector('.main'),
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
  processBlock = document.querySelector('.process'),
  processImageOne = document.querySelector('.process__img-1'),
  processImageTwo = document.querySelector('.process__img-2');

document.addEventListener('DOMContentLoaded', () => {

  if(document.body.clientWidth >= 992) {

    window.addEventListener('scroll', () => {

      let scrollTop = window.scrollY,
        mainCenter = mainBlock.offsetHeight / 5,
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
  } else (
    welcomeText.style.opacity = '1',
    stepsImageOne.style.opacity = '1',
    stepsImageTwo.style.opacity = '1',
    stepsText.forEach(steps => {
      steps.style.opacity = '1';
    }),
    agentImageOne.style.opacity = '1'
  )
});
  
// Scroll to block by anchor

let headerLink = document.querySelectorAll('.header__anchor-link'),
  headerScrollDown = document.querySelector('.header__scroll-down'),
  mainBtn = document.querySelector('.main-btn');

  let scrollToBlock = (block) => {
    block.scrollIntoView({
      block: 'end',
      behavior: 'smooth'
    });
  };

  headerScrollDown.addEventListener('click', (e) => {
    e.preventDefault(); 
    scrollToBlock(footer);
  });

  mainBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    scrollToBlock(welcomeBlock);
  });

  headerLink.forEach((link, i) => {

    headerLink[i].addEventListener('click', (e) => {
      e.preventDefault();

      switch (i) {
        case 0:
          scrollToBlock(welcomeBlock);
          break;
        case 1: 
          scrollToBlock(stepsBlock);
          break;
        case 2: 
          scrollToBlock(agentBlock);
          break;
        case 3: 
          scrollToBlock(processBlock);
          break; 
      } 
    });
  });


// Play Video 

const videoWrapper = document.querySelector('.real-estate__video-wrapper'),
  video = document.querySelector('.real-estate__video'),
  hideBg = document.querySelector('.hide-bg'),
  videoBtn = document.querySelector('.agent__video');

videoBtn.addEventListener('click', () => {
  video.setAttribute('src', 'https://www.youtube.com/embed/xcSVUrvG8WM');

  setTimeout(() => {
    videoWrapper.classList.remove('display-none');
    videoWrapper.classList.add('display-block');
  }, 50);

  setTimeout(() => {
    videoWrapper.classList.add('video-scale-open');
  }, 300);
  
  hideBg.classList.add('display-block', 'opacity-visible');

});

hideBg.addEventListener('click', () => {

  if(hideBg.classList.contains('display-block')) {
    hideBg.classList.remove('display-block', 'opacity-visible');
    videoWrapper.classList.remove('video-scale-open');

    setTimeout(() => {
      videoWrapper.classList.remove('display-block');
      videoWrapper.classList.add('display-none');
      video.setAttribute('src', '#');
    }, 600);
  }
});

// Contact modal 

const contactBtn = document.querySelector('.yellow-btn'),
  contactModal = document.querySelector('.contacts-modal'),
  contactsModalClose = document.querySelector('.contacts-modal__close');

contactBtn.addEventListener('click', () => {
  contactModal.classList.remove('opacity-hide');
  contactModal.classList.add('display-block');
  hideBg.classList.remove('opacity-hide');
  hideBg.classList.add('display-block');

  setTimeout(() => {
    contactModal.classList.add('opacity-visible');
    hideBg.classList.add('opacity-visible');
  }, 200);

});

contactsModalClose.addEventListener('click', () => {
  contactModal.classList.remove('opacity-visible');
  contactModal.classList.add('opacity-hide');
  
  setTimeout(() => {
    contactModal.classList.remove('display-block');
    hideBg.classList.remove('display-block');
  }, 900);

  hideBg.classList.remove('opacity-visible');
  hideBg.classList.add('opacity-hide');

  setTimeout(() => {
    contactModal.classList.remove('display-block');
    hideBg.classList.remove('opacity-hide');
  }, 900);

});










  







