// html elements
const body = document.querySelector("body");
const rangeInputs = document.querySelectorAll(".input-container input");
const btn = document.querySelector(".container button");

// default rgb values
let rgbValues = [54, 116, 181];

// interate inputs and get values
rangeInputs.forEach((item, idx) => {
  item.addEventListener("input", (e) => {
    // set input value in defaultValues array
    rgbValues[idx] = e.target.value;

    // set color to body
    body.style.background = `rgb(${rgbValues.join(",")})`;

    // set color code to btn
    btn.textContent = `rgb(${rgbValues})`;
  });
});

// write new color code to navigator
btn.addEventListener("click", (e) => {
  navigator.clipboard
    .writeText(e.target.textContent)
    .then(() => alert("Matn nusxalandi"))
    .catch((err) => alert(`xatolik yuz berdi ${err}`));
});
