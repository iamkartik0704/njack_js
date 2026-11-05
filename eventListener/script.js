const box = document.getElementById("box");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const output = document.getElementById("output");

// mouseover / mouseout
box.addEventListener("mouseover", () => {
  box.style.background = "orange";
  box.textContent = "Mouse is over me!";
});

box.addEventListener("mouseout", () => {
  box.style.background = "lightblue";
  box.textContent = "Hover over me";
});

// click
let count = 0;
btn.addEventListener("click", () => {
  count++;
  output.textContent = "Button clicked " + count + " times";
});

// keyup
input.addEventListener("keyup", (e) => {
  output.textContent = "You pressed: " + e.key;
});