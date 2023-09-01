let SecondSmallBlank = document.querySelector(".secondSmallBlank");
let open = document.querySelector(".Open");
let close = document.querySelector(".Close");

open.addEventListener("click", () => {
  SecondSmallBlank.classList.add("opened");
});

close.addEventListener("click", () => {
  SecondSmallBlank.classList.remove("opened");
});
