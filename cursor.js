const cursor = document.getElementById("cursor");
const cursorBallBig = document.querySelector(".circle-big");
const cursorBallSmall = document.querySelector(".circle-small");

let posS = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let posB = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let mouse = { x: posS.x, y: posS.y };
const speed = 0.2;
let fpms = 60 / 1000;

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

const xSetBallSmall = gsap.quickSetter(cursorBallSmall, "x", "px");
const ySetBallSmall = gsap.quickSetter(cursorBallSmall, "y", "px");
const xSetBallBig = gsap.quickSetter(cursorBallBig, "x", "px");
const ySetBallBig = gsap.quickSetter(cursorBallBig, "y", "px");

gsap.ticker.add((time, deltaTime) => {
  let delta = deltaTime * fpms;
  let dt = 1.0 - Math.pow(1.0 - speed, delta);

  posS.x += mouse.x - posS.x;
  posS.y += mouse.y - posS.y;
  posB.x += (mouse.x - posB.x) * dt;
  posB.y += (mouse.y - posB.y) * dt;

  xSetBallSmall(posS.x);
  ySetBallSmall(posS.y);
  xSetBallBig(posB.x);
  ySetBallBig(posB.y);

  cursorBallBig.style.transform += "translate(-50%, -50%)";
  cursorBallSmall.style.transform += "translate(-50%, -50%)";
});

const hover = document.querySelectorAll(".hover");

for (let h of hover) {
  h.addEventListener("mouseover", () => {
    cursorBallBig.style.transition = ".1s ease";
    cursorBallBig.style.width = "100px";
    cursorBallBig.style.height = "100px";
    setTimeout(() => {
      cursorBallBig.style.transition = "";
    }, 200);
  });

  h.addEventListener("mouseleave", () => {
    cursorBallBig.style.transition = ".1s ease";
    cursorBallBig.style.width = "45px";
    cursorBallBig.style.height = "45px";
    setTimeout(() => {
      cursorBallBig.style.transition = "";
    }, 200);
  });
}

$("#burgerButton").on("click", () => {
  const menu = $(".h-wrapper .s2");
  if ($("#burgerButton:checked").val() !== undefined) {
    menu.css("transform", "translateX(0)");
  } else {
    menu.css("transform", "translateX(100%)");
  }
});

$(window).on("resize", () => {
  const menu = $(".h-wrapper .s2");
  if (window.innerWidth > 768) {
    menu.css("transform", "translateX(0)");
  } else {
    menu.css("transform", "translateX(100%)");
  }
});
