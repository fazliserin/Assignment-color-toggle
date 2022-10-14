let NavbarBtn = document.querySelector(".navbar__btn");
let getNavbarUl = document.querySelector(".navbar__main");
let getNavbarLinks = document.querySelectorAll(".navbar__main a");

NavbarBtn.addEventListener("click", () => {
  if (getNavbarUl.style.visibility === "visible") {
    getNavbarUl.style.visibility = "hidden";
  } else {
    getNavbarUl.style.visibility = "visible";
  }

  let arrayLength = getNavbarLinks.length;
  for (let i = 0; i < arrayLength; i++) {
    getNavbarLinks[i].style.opacity = "1";
  }
});

let btnGray = document.querySelector(".gray");
let btnBlue = document.querySelector(".blue");
let btnRed = document.querySelector(".red");
let btnGreen = document.querySelector(".green");
let btnYellow = document.querySelector(".yellow");
let btnPurple = document.querySelector(".purple");

btnGray.addEventListener("click", () => {
  document.body.style.background = "lightgray";
  getNavbarUl.style.visibility = "hidden";
});

btnBlue.addEventListener("click", () => {
  document.body.style.background = "blue";
  getNavbarUl.style.visibility = "hidden";
});

btnRed.addEventListener("click", () => {
  document.body.style.background = "red";
  getNavbarUl.style.visibility = "hidden";
});

btnGreen.addEventListener("click", () => {
  document.body.style.background = "green";
  getNavbarUl.style.visibility = "hidden";
});

btnYellow.addEventListener("click", () => {
  document.body.style.background = "yellow";
  getNavbarUl.style.visibility = "hidden";
});

btnPurple.addEventListener("click", () => {
  document.body.style.background = "purple";
  getNavbarUl.style.visibility = "hidden";
});
