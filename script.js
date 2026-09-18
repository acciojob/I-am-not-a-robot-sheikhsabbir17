//your code here
let images = document.querySelectorAll("#images img");
let reset = document.getElementById("reset");
let verify = document.getElementById("verify");
let para = document.getElementById("para");

let selected = [];

let arr = [1, 2, 3, 4, 5];
let duplicate = Math.floor(Math.random() * 5);
arr.push(arr[duplicate]);

arr.sort(() => Math.random() - 0.5);

images.forEach((img, i) => {
  img.className = `img${arr[i]}`;

  img.addEventListener("click", function () {
    if (selected.length >= 2 || selected.includes(img)) return;

    selected.push(img);
    img.classList.add("selected");

    reset.style.display = "inline-block";

    if (selected.length === 2) {
      verify.style.display = "inline-block";
    }
  });
});

reset.addEventListener("click", function () {
  selected.forEach(img => img.classList.remove("selected"));

  selected = [];
  reset.style.display = "none";
  verify.style.display = "none";
  para.innerText = "";
});

verify.addEventListener("click", function () {
  if (selected[0].className === selected[1].className) {
    para.innerText = "You are a human. Congratulations!";
  } else {
    para.innerText =
      "We can't verify you as a human. You selected the non-identical tiles.";
  }

  verify.style.display = "none";
});