let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");
let lines = document.querySelectorAll(".line");
let heading = document.querySelector(".toggle-heading");
const list = document.querySelectorAll("li");
const underlay = document.querySelector(".underlay");
const text = document.querySelectorAll(".text");
const images = [
  "https://netsoltech.com/images/contact-usVector.svg",
  "https://netsoltech.com/images/contact-usVector.svg",
  "https://netsoltech.com/images/digitalVector.svg",
  "https://netsoltech.com/images/eventsVector.svg",
  "https://netsoltech.com/images/innovationVector.svg",
  "https://netsoltech.com/images/investorsVector.svg",
];

text.forEach((item) => {
  item.addEventListener("mouseover", () => {
    if (item.innerHTML == "Events") {
      underlay.src = images[3];
    } else if (item.innerHTML == "Innovation") {
      underlay.src = images[4];
    } else if (item.innerHTML == "Investors") {
      underlay.src = images[5];
    } else if (item.innerHTML == "Products") {
      underlay.src = images[2];
    } else if (item.innerHTML == "About") {
      underlay.src = images[0];
    }
  });
});

menu.addEventListener("click", () => {
  list.forEach((i) => {
    i.style.opacity = "0";
  });

  if (heading.innerHTML == "MENU") {
    heading.innerHTML = "CLOSE";
  } else {
    heading.innerHTML = "MENU";
  }
  sidebar.classList.toggle("show");
  lines.forEach((item, index) => {
    lines[0].classList.toggle("toggle-line1");
    lines[1].classList.toggle("toggle-line2");
    lines[2].classList.toggle("toggle-line3");
  });

  list.forEach((li, index) => {
    li.style.opacity = "0";
    setTimeout(() => {
      li.classList.toggle("animate");
      li.style.opacity = "1";
    }, index * 120);
  });
});
