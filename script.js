document.querySelector(".bars").addEventListener("click", () => {
  document.querySelector(".items").classList.toggle("active");

});
document.querySelectorAll(".item-link").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".item-link").classList.toggle("active");
  });
});

