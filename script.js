//Slider logic

const sliderLeftBtn = document.querySelector('.sliderLeftBtn');
const sliderRightBtn = document.querySelector('.sliderRightBtn');
const slides = document.querySelectorAll('.slide');
const dotContainer = document.querySelector('.dotContainer');





let currentSlide = 0;
const maxSlide = slides.length;

const createDots = function(){
    slides.forEach((s, i) => {
      dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
    });
};

const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

const goToSlide = (curSlide) => {
    slides.forEach((s,i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`));
};

const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  sliderLeftBtn.addEventListener('click', prevSlide);
  sliderRightBtn.addEventListener('click', nextSlide);

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });


  //Operations buttons logic
  const buttonsOperations = document.querySelectorAll('.opsBtn');
  const opsText = document.querySelectorAll('.opsText');
  const bigCircle = document.querySelector('.bigCircle');
  const colors = ['orange', 'lightgreen', 'orchid'];
  

//   const removeDisabled = function(i){
//      opsText.forEach((t) => {
//         t.classList.add('disabled');
//      });
//     //  document.querySelector(`.operationsMainText-${i}`).classList.remove('disabled');
//   };

  buttonsOperations.forEach((b, i) => {
  b.addEventListener('click', () => {
    opsText.forEach((t, i) => {
        t.classList.add('disabled');
     });
     opsText[i].classList.remove('disabled');
     bigCircle.style.backgroundColor = `${colors[i]}`;
     buttonsOperations.forEach((b,i) => b.style.transform = 'none');
     b.style.transform = 'translateY(-10%)';
  });
  
  });

  //Nav opacity logic
const navElements = document.querySelectorAll('.nav');

const mouseOverLogic = (event) => {
    navElements.forEach(element => {
        element !== event.target && element.classList.add('opaced');
    });
};

const mouseOutLogic = (event) => {
    navElements.forEach(element => {
        element.classList.contains('opaced') && element.classList.remove('opaced');
    })
};

navElements.forEach(el => el.addEventListener('mouseout', mouseOutLogic));
navElements.forEach(el => el.addEventListener('mouseover', mouseOverLogic));

//Modal logic

const modalContainer = document.querySelector('.backdrop');
const modalOpen = document.querySelector('.modalOpen');
const closeModal = document.querySelector('.closeModal');
const modal = document.querySelector('.modal');

modalOpen.addEventListener('click', () => {
    modalContainer.classList.add('backdropBackground');
    modalContainer.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    modalContainer.classList.add('hidden');
});

modalContainer.addEventListener('click', (event) => {
    event.target === modalContainer && modalContainer.classList.add('hidden');
    console.log(event.target);
})

//Scroll

const navLink = document.querySelector('.header-right');

navLink.addEventListener('click', (event) => {
event.preventDefault();
const id = event.target.getAttribute('href');
if(event.target.classList.contains('navLink')){
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

});

 