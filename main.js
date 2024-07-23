import "./style.css";
import "./Normalize.css";
import "./CatelogueM.css"
import "./can.css"



gsap.registerPlugin(ScrollTrigger);
let Prelodertime = gsap.timeline();
function cursor() {
  document.addEventListener("mousemove", function (gyan) {
    gsap.to(".cursor", {
      x: gyan.x,
      y: gyan.y,
      duration: 0.5
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const anchors = document.querySelectorAll("a");
    anchors.forEach((anchor) => {
      anchor.addEventListener("mouseenter", () => {
        gsap.to(".cursor", {
          scale: .7,
          border: "1px solid white",
          duration: 0.5
        });
      });

      anchor.addEventListener("mouseleave", () => {
        gsap.to(".cursor", {
          scale: 1,
          border: "1px solid var(--border - color)",
          duration: 0.5
        });
      });
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelectorAll("button");
    btn.forEach((bt) => {
      bt.addEventListener("mouseenter", () => {

        gsap.to(".cursor", {
          width: "5rem",
          height: "5rem",
          border: "1px solid white",
          duration: 0.5
        });
        document.querySelector(".cursor").innerHTML = "<span>Click</span>";
      });

      bt.addEventListener("mouseleave", () => {
        document.querySelector(".cursor").innerHTML = "";
        gsap.to(".cursor", {
          width: "3rem",
          height: "3rem",
          scale: 1,
          border: "1px solid var(--border - color)",
          duration: 0.5
        });
      });
    });
  });
  document.querySelector(".can").addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      width: "6rem",
      height: "6rem",
      border: "1px solid white",
      duration: 0.5
    });
    document.querySelector(".cursor").innerHTML = "<span>hover</span>";
  })
  document.querySelector(".can").addEventListener("mouseleave", () => {
    document.querySelector(".cursor").innerHTML = "";
    gsap.to(".cursor", {
      width: "3rem",
      height: "3rem",
      scale: 1,
      border: "1px solid var(--border - color)",
      duration: 0.5
    });
  })
}

cursor();


function loderanimtion() {


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
    stagger: 0.07,
  });
  Prelodertime.from(".starbuck .b", {
    opacity: 0,
    y: 150,
    duration: 0.5,
    stagger: 0.07,
  });

  // gsap.from(".preloder img", {
  //   opacity: 0,
  //   duration: 0.2,
  // });
  Prelodertime.to(".starbuck .a", {
    opacity: 0,
    y: -150,
    duration: 0.2,
    stagger: 0.09,
  });
  Prelodertime.to(".starbuck .b", {
    opacity: 0,
    y: -150,
    duration: 0.2,
    stagger: 0.09,
  });
  Prelodertime.to(
    ".preloder .goingtoright",
    {
      opacity: 0,
      duration: 0.7,
      x: 1000,
    },
    "go"
  );
  Prelodertime.to(
    ".preloder .goingtoleft",
    {
      opacity: 0,
      duration: 0.7,
      x: -1000,
    },
    "go"
  );
  Prelodertime.to(".preloder", {
    duration: 0.2,
    opacity: 0,
    display: "none",
  });
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
  let next = document.getElementById("next");
  let prev = document.getElementById("prev");
  let carousel = document.querySelector(".carousel");
  let items = document.querySelectorAll(".carousel .item");
  let countItem = items.length;
  let active = 1;
  let other_1 = null;
  let other_2 = null;
  next.onclick = () => {
    carousel.classList.remove("prev");
    carousel.classList.add("next");
    active = active + 1 >= countItem ? 0 : active + 1;
    other_1 = active - 1 < 0 ? countItem - 1 : active - 1;
    other_2 = active + 1 >= countItem ? 0 : active + 1;
    changeSlider();
  };
  prev.onclick = () => {
    carousel.classList.remove("next");
    carousel.classList.add("prev");
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    other_1 = active + 1 >= countItem ? 0 : active + 1;
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
    changeSlider();
  };
  const changeSlider = () => {
    let itemOldActive = document.querySelector(".carousel .item.active");
    if (itemOldActive) itemOldActive.classList.remove("active");

    let itemOldOther_1 = document.querySelector(".carousel .item.other_1");
    if (itemOldOther_1) itemOldOther_1.classList.remove("other_1");

    let itemOldOther_2 = document.querySelector(".carousel .item.other_2");
    if (itemOldOther_2) itemOldOther_2.classList.remove("other_2");

    items.forEach((e) => {
      e.querySelector(".image img").style.animation = "none";
      e.querySelector(".image figcaption").style.animation = "none";
      void e.offsetWidth;
      e.querySelector(".image img").style.animation = "";
      e.querySelector(".image figcaption").style.animation = "";
    });

    items[active].classList.add("active");
    items[other_1].classList.add("other_1");
    items[other_2].classList.add("other_2");

    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
      next.click();
    }, 5000);
  };
  let autoPlay = setInterval(() => {
    next.click();
  }, 5000);

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item, { scale: 1, duration: 0.3, color: "#40966c" });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(item, { scale: 1, duration: 0.3, color: "black" });
    });
  });


  // Prelodertime.from(".afterpreloader .logo", {
  //   y: 30,
  //   opacity: 0,
  //   duration: .3,
  // })
  // Prelodertime.from(".afterpreloader li", {
  //   y: 30,
  //   opacity: 0,
  //   duration: .7,
  //   stagger: 0.2
  // })
  // Prelodertime.from(".afterpreloader #nav-part2 h6", {
  //   y: 30,
  //   opacity: 0,
  //   duration: .4,
  //   stagger: 0.2
  // })
  Prelodertime.from(".afterpreloader .content h2", {

    opacity: 0,
    duration:1,

  })
  Prelodertime.from(".afterpreloader .content p", {
    x: -50,
    opacity: 0,
    duration:.7,

  })
  Prelodertime.from(".afterpreloader article figure", {

    opacity: 0,
    duration: .5,

  })
  Prelodertime.from(".afterpreloader .content button", {
    y: -50,
    opacity: 0,
    duration:.5,

  })
}
landingpage();

function giftanimation() {
  let gift = gsap.timeline({
    scrollTrigger: {
      trigger: ".ride",
      scroller: ".app",
      // markers: true,
      start: "top 60%",
      end: "bottom 90%",
      scrub: true
    },
  });
  gift.from(".gift h2", {
    scale: 0,
    opacity: 0,
    duration: 1,

  });
  gift.from(".gift p", {
    y: 20,
    opacity: 0,
    duration: 1,

  });
  gift.from(".gift .join", {

    opacity: 0,
    duration: 1,

  });
}
giftanimation();

function seasonanimatio() {

  gsap.from(".seasonal-heading .zero", {
    opacity: 0,
    duration: 1,
    y: -40,
    scrollTrigger: {
      trigger: ".seasonal-heading",
      scroller: ".app",
      // markers: true,
      start: "top 40%",
      // scrub:3,

    },

  })
  gsap.from(".seasonal-heading .one", {
    opacity: 0,
    duration: 1,
    delay: 0.2,
    y: 40,
    scrollTrigger: {
      trigger: ".seasonal-heading",
      scroller: ".app",
      //markers: true,
      start: "top 40%",
      // scrub:3,

    },

  })
  gsap.from(".Container .box", {
    opacity: 0,
    scale: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".Container",
      scroller: ".app",
      //markers: true,
      start: "top 50%",
      // scrub:3,

    },
  })

  document.addEventListener("DOMContentLoaded", function () {
    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    const letters = document.querySelectorAll('.seasonal-heading span');
    let colorIndex = 0;

    function animateLetters() {
      gsap.to(letters, {
        color: colors[colorIndex],
        stagger: 0.1,
        duration: 0.5,
        onComplete: () => {
          colorIndex = (colorIndex + 1) % colors.length;
          animateLetters();
        }
      });
    }

    animateLetters();
  });
}
seasonanimatio();

function Pairingsanimation() {
  let Pairings = gsap.timeline({
    scrollTrigger: {
      trigger: ".glow",
      scroller: ".app ",
      start: "top 55%",
      end: "top 70%",
      // markers: true,
      scrub: 7,
    },
  });
  Pairings.from(".Pairings h2", {
    opacity: 0,
    y: 30,
    duration: .6,
  })
  Pairings.from(".Pairings p", {
    opacity: 0,
    y: 30,
    duration: .6,
  })
  Pairings.from(".Pairings button", {
    opacity: 0,
    y: 30,
    duration: .6,
  })
  Pairings.from(".Pairings img", {
    opacity: 0,
    y: 30,
    duration: .6,
  })

}
Pairingsanimation();
function Rewardanimation() {
  let reward = gsap.timeline({
    scrollTrigger: {
      trigger: ".reward",
      scroller: ".app ",
      start: "top 55%",
      end: "top 70%",
      // markers: true,
      scrub: 7,
    },
  });
  reward.from(".reward h2", {
    opacity: 0,
    y: 30,
    duration: .6,
  })
  reward.from(".reward p", {
    opacity: 0,
    x: -30,
    duration: .6,
  })
  reward.from(".reward button", {
    opacity: 0,
    y: 30,
    duration: .6,
  })

  gsap.to(".egift1", {
     
    y: 10,
    x: 10,
    scale:1.2,
    duration: 1,
    repeat: -1,
    yoyo: true,
  })
  gsap.to(".egift2", {

    y: -10,
    x: 10,
    
    duration: 1,
    repeat: -1,
    yoyo: true,
  })
  gsap.to(".egift3", {

    y: 10,
    x: -10,
    duration: 1,
    repeat: -1,
    yoyo: true,
  })
  gsap.to(".egift4", {

    y: -10,
    x: -10,
    scale:1.2,
    duration: 1,
    repeat: -1,
    yoyo: true,
  })
}
Rewardanimation();

function textrunninganimation() {
  let clutter = "";
  document.querySelector(".textrun").textContent.split(" ").forEach(function (dets) {
    clutter += `<span>${dets}</span> `;
  });
  document.querySelector(".textrun").innerHTML = clutter;

  gsap.to(".textrun span", {
    scrollTrigger: {
      trigger: `.textrun span `,
      start: `top bottom`,
      end: `bottom top`,
      //markers: true,
      scroller: `.app`,
      scrub: .5,
    },
    stagger: .2,
    color: `#40966c`
  })

}
textrunninganimation();


function footeraniamtion() {
  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("footer a");
    links.forEach((link) => {
      link.classList.add("underline");

      const tl = gsap.timeline({ paused: true });

      tl.to(link, {
        color: "#40966c",
        scale: 1.02,
        duration: 0.3,
        ease: "power2.inOut",
      });

      link.addEventListener("mouseenter", () => tl.play());
      link.addEventListener("mouseleave", () => tl.reverse());
    });
  });

}
footeraniamtion();

