import "./style.css";
import "./Normalize.css";

import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

function loderanimtion() {
  let Prelodertime = gsap.timeline();
 
  function braketheText() {
    let tata = document.querySelector(".starbuck");
    let tatah1 = tata.textContent;
    let splitedtext = tatah1.split("");
    let halfvalue = splitedtext.length / 2;
    let clutter = "";

    splitedtext.forEach(function (e, idx) {
      if (idx < halfvalue) {
        clutter += `<span class="a">${e}</span>`;
      } else {
        clutter += `<span class="b">${e}</span>`;
      }
    });

    console.log(clutter);
    tata.innerHTML = clutter;
  }
  braketheText();
  Prelodertime.from(".starbuck .a", {
    opacity: 0,
    y: 150,
    duration: 0.5,
    stagger: 0.15,

  });
  Prelodertime.from(".starbuck .b", {
    opacity: 0,
    y: 150,
    duration: 0.5,
    stagger: 0.15,

  });

  gsap.from(".preloder img", {
    opacity: 0,
    duration: .8,
  })
  Prelodertime.to(".starbuck .a", {
    opacity: 0,
    y: -150,
    duration: 0.4,
    stagger: 0.10,

  });
  Prelodertime.to(".starbuck .b", {
    opacity: 0,
    y: -150,
    duration: 0.4,
    stagger: 0.10,

  });
  Prelodertime.to(".preloder .goingtoright", {
    opacity: 0,
    duration: .7,
    x: 1000
  }, 'go')
  Prelodertime.to(".preloder .goingtoleft", {
    opacity: 0,
    duration: .7,
    x: -1000
  }, 'go')
  Prelodertime.to(".preloder", {
    duration: .2,
    opacity: 0,
    display: "none"
  })

}
loderanimtion();

function locomotive() {

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".app"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(".app", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".app").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();


}
locomotive();



function landingpage() {
  let next = document.getElementById('next');
  let prev = document.getElementById('prev');
  let carousel = document.querySelector('.carousel');
  let items = document.querySelectorAll('.carousel .item');
  let countItem = items.length;
  let active = 1;
  let other_1 = null;
  let other_2 = null;
  next.onclick = () => {
    carousel.classList.remove('prev');
    carousel.classList.add('next');
    active = active + 1 >= countItem ? 0 : active + 1;
    other_1 = active - 1 < 0 ? countItem - 1 : active - 1;
    other_2 = active + 1 >= countItem ? 0 : active + 1;
    changeSlider();
  }
  prev.onclick = () => {
    carousel.classList.remove('next');
    carousel.classList.add('prev');
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    other_1 = active + 1 >= countItem ? 0 : active + 1;
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
    changeSlider();
  }
  const changeSlider = () => {
    let itemOldActive = document.querySelector('.carousel .item.active');
    if (itemOldActive) itemOldActive.classList.remove('active');

    let itemOldOther_1 = document.querySelector('.carousel .item.other_1');
    if (itemOldOther_1) itemOldOther_1.classList.remove('other_1');

    let itemOldOther_2 = document.querySelector('.carousel .item.other_2');
    if (itemOldOther_2) itemOldOther_2.classList.remove('other_2');

    items.forEach(e => {
      e.querySelector('.image img').style.animation = 'none';
      e.querySelector('.image figcaption').style.animation = 'none';
      void e.offsetWidth;
      e.querySelector('.image img').style.animation = '';
      e.querySelector('.image figcaption').style.animation = '';
    })

    items[active].classList.add('active');
    items[other_1].classList.add('other_1');
    items[other_2].classList.add('other_2');

    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
      next.click();
    }, 5000);
  }
  let autoPlay = setInterval(() => {
    next.click();
  }, 5000);


  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, { scale: 1, duration: 0.3, color: "#40966c" });
    });

    item.addEventListener('mouseleave', () => {
      gsap.to(item, { scale: 1, duration: 0.3, color: "black" });
    });
  });

}
landingpage();


document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('footer a');
  links.forEach(link => {
    link.classList.add('underline');

    const tl = gsap.timeline({ paused: true });

    tl.to(link, {
      color: "#40966c",
      scale: 1.02,
      duration: 0.3,
      ease: "power2.inOut"
    });

    link.addEventListener('mouseenter', () => tl.play());
    link.addEventListener('mouseleave', () => tl.reverse());
  });
});

