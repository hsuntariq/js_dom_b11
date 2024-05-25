const sizes = document.querySelectorAll(".size");
const colors = document.querySelectorAll(".color");
const canvas = document.querySelector(".canvas");
let myColor = document.querySelector(".color-5");
let drawing;

let isSize1 = false;
let isSize2 = false;
let isSize3 = false;
let isSize4 = false;

let isColor1 = false;
let isColor2 = false;
let isColor3 = false;
let isColor4 = false;
let custom = false;

let customColor = "";

myColor.addEventListener("input", () => {
  custom = true;
  isColor1 = false;
  isColor2 = false;
  isColor3 = false;
  isColor4 = false;
  customColor = myColor.value;
});

colors.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (item.classList[1] == "color1") {
      isColor1 = true;
      isColor2 = false;
      isColor3 = false;
      isColor4 = false;
      custom = false;
    } else if (item.classList[1] == "color2") {
      isColor1 = false;
      isColor2 = true;
      isColor3 = false;
      isColor4 = false;
      custom = false;
    } else if (item.classList[1] == "color3") {
      isColor1 = false;
      isColor2 = false;
      isColor3 = true;
      isColor4 = false;
      custom = false;
    } else if (item.classList[1] == "color4") {
      isColor1 = false;
      isColor2 = false;
      isColor3 = false;
      isColor4 = true;
      custom = false;
    }
  });
});

sizes.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (item.classList[1] == "size1") {
      isSize1 = true;
      isSize2 = false;
      isSize3 = false;
      isSize4 = false;
    } else if (item.classList[1] == "size2") {
      isSize1 = false;
      isSize2 = true;
      isSize3 = false;
      isSize4 = false;
    } else if (item.classList[1] == "size3") {
      isSize1 = false;
      isSize2 = false;
      isSize3 = true;
      isSize4 = false;
    } else if (item.classList[1] == "size4") {
      isSize1 = false;
      isSize2 = false;
      isSize3 = false;
      isSize4 = true;
    }
  });
});

let mousedown = false;
let mouseup = false;

canvas.addEventListener("mousedown", () => {
  mousedown = true;
  mouseup = false;
});

canvas.addEventListener("mouseup", () => {
  mousedown = false;
  mouseup = true;
});

canvas.addEventListener("mousemove", (e) => {
  // let x = e.clientX
  // let y = e.clientY
  if (mousedown) {
    console.log(e.target);
    const { clientX, clientY } = e;
    drawing = document.createElement("div");
    drawing.classList.add("draw");
    drawing.style.left = `${clientX - 350}px`;
    drawing.style.top = `${clientY - 250}px`;
    if (isSize1) {
      drawing.style.width = "20px";
      drawing.style.height = "20px";
    } else if (isSize2) {
      drawing.style.width = "40px";
      drawing.style.height = "40px";
    } else if (isSize3) {
      drawing.style.width = "60px";
      drawing.style.height = "60px";
    } else if (isSize4) {
      drawing.style.width = "80px";
      drawing.style.height = "80px";
    }
    if (isColor1) {
      drawing.style.backgroundColor = "red";
    } else if (isColor2) {
      drawing.style.backgroundColor = "skyblue";
    } else if (isColor3) {
      drawing.style.backgroundColor = "green";
    } else if (isColor4) {
      drawing.style.backgroundColor = "gray";
    } else if (custom) {
      drawing.style.backgroundColor = customColor;
    }

    canvas.appendChild(drawing);
  }
});
