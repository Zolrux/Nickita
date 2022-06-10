const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

const feedbackTabs = document.querySelectorAll(".feedback__tab");
const feedbackTabsContent = document.querySelectorAll(".feedback__tab-content");

feedbackTabs.forEach(function (feedbackTab, i) {
  feedbackTab.addEventListener("click", function () {
    feedbackTabsContent[i].classList.add("active");
    feedbackTabs.forEach(function (delActive, j) {
      if (i !== j) {
        feedbackTabsContent[j].classList.remove("active");
      }
    });
  });
});

const headerList = document.querySelector(".header__list");
const burgerMenu = document.querySelector(".header__burger");

burgerMenu.addEventListener("click", function () {
  if (!headerList.classList.contains("active")) {
    headerList.classList.add("active");
    burgerMenu.classList.add("active");
    document.body.style.overflow = "hidden";
  } else {
    headerList.classList.remove("active");
    burgerMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});
