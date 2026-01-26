// ---------------------------- Dom Insert ---------------------------- //

let spacer = document.querySelector(".spacer");
let MobileOpen = document.querySelector(".Mobile-open");
let faXmark = document.querySelector(".def");
let body = document.querySelector("body");
let drop = document.querySelectorAll(".box");
let dropContent = document.querySelectorAll(".dropdown-content-mobile");
// let arrow = document.getElementById("arrow");
// let slider = document.querySelectorAll(".iid");
// console.log(slider);

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

// count = 10;

// arrow.addEventListener("click", function () {
//   for (let i of slider) {

//     if (count < slider.length) {
//       i.style.transform = `translateX(-${count * 10}px)`;
//       i.style.gap = '30px';
//       count++;
//     } else {
//       i.style.transform = `translateX(0px)`;
//       count = 1;
//     }
//   }
// });
  