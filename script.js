window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-btn").style.display = "block";
  } else {
    document.getElementById("scroll-btn").style.display = "none";
  }
}




document.getElementById("scroll-btn").onclick = function() {topFunction()};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}






// Select the button element with class "button"


// let buttons = document.querySelectorAll(".button");
// let scrollInterval;
// let isScrolling = false;

// const startScrolling = () => {
//   isScrolling = true;
//   scrollInterval = setInterval(() => {
//     window.scrollBy(0, 10);
//   }, 100);
// };

// const stopScrolling = () => {
//   isScrolling = false;
//   clearInterval(scrollInterval);
// };

// const handleClick = () => {
//   if (!isScrolling) {
//     startScrolling();
//   } else {
//     stopScrolling();
//   }
// };

// buttons.forEach((button) => {
//   button.addEventListener("click", handleClick);
// });

// let scrollUpButtons = document.querySelectorAll(".scroll-up");

// scrollUpButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     window.scrollBy(0, -window.scrollY);
//   });
// });
