// ---------------------------- Dom Insert ---------------------------- //

let spacer = document.querySelector(".spacer");
let MobileOpen = document.querySelector(".Mobile-open");
let faXmark = document.querySelector(".def");
let body = document.querySelector("body");
let drop = document.querySelectorAll(".box");
let dropContent = document.querySelectorAll(".dropdown-content-mobile");
let left = document.querySelector(".arrow-left");
let right = document.querySelector(".arrow-right");
let slider = document.querySelector(".slider");
let sliders = document.querySelectorAll(".iid");
let slet = document.getElementById("slet");
console.log(slider);



//------------------ function for Menu For Mobile  ------------------//

spacer.addEventListener("click", function () {
  if (MobileOpen.style.display === "block") {
    MobileOpen.style.display = "none";
  } else {
    MobileOpen.style.display = "block";
  }
});

faXmark.addEventListener("click", function () {
  MobileOpen.style.display = "none";
});

//------------------ Dropdown Menu For Mobile  ------------------//

drop[0].addEventListener("click", function () {
  if (dropContent[0].style.display === "none") {
    dropContent[0].style.display = "block";
  } else {
    dropContent[0].style.display = "none";
  }
  dropContent[1].style.display = "none";
  dropContent[2].style.display = "none";
  dropContent[3].style.display = "none";
});

drop[1].addEventListener("click", function () {
  if (dropContent[1].style.display === "none") {
    dropContent[1].style.display = "block";
  } else {
    dropContent[1].style.display = "none";
  }
  dropContent[0].style.display = "none";
  dropContent[2].style.display = "none";
  dropContent[3].style.display = "none";
});

drop[2].addEventListener("click", function () {
  if (dropContent[2].style.display === "none") {
    dropContent[2].style.display = "block";
  } else {
    dropContent[2].style.display = "none";
  }
  dropContent[0].style.display = "none";
  dropContent[1].style.display = "none";
  dropContent[3].style.display = "none";
});

drop[6].addEventListener("click", function () {
  if (dropContent[3].style.display === "none") {
    dropContent[3].style.display = "block";
  } else {
    dropContent[3].style.display = "none";
  }
  dropContent[0].style.display = "none";
  dropContent[1].style.display = "none";
  dropContent[2].style.display = "none";
});

count = 1;

right.addEventListener("click", function () {
  if (count >= sliders.length / 3) {
    count = 0;
  }
  slider.style.transform = `translateX(${-25.2 * count}%)`;
  slider.style.transition = "all 0.5s ease-in-out";
  count++;
});

left.addEventListener("click", function () {
  if (count <= 1) {
    count = sliders.length / 3;
  }
  slet.style.display = "block";

  slider.style.transform = `translateX(${-25.2 * (count - 2)}%)`;

  slider.style.transition = "all 0.5s ease-in-out";
  count--;
});
