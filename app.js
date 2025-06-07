import LocomotiveScroll from 'https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.esm.js';
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});

const elecontainer = document.querySelector('.elecontainer');
const fixedImg = document.querySelector('.fixed-img');

elecontainer.addEventListener('mouseenter', ()=>{
  fixedImg.style.display = "block"
});
elecontainer.addEventListener('mouseleave', ()=>{
  fixedImg.style.display = "none"
});

const elements = document.querySelectorAll('.ele1');
elements.forEach((ele)=>{
  ele.addEventListener('mouseenter', ()=>{
   const images=  ele.dataset.image
   fixedImg.style.backgroundImage = `url(${images})`
  });
});

let swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 50,
    });