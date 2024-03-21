document.querySelector(".bars").addEventListener("click", () => {
  document.querySelector(".items").classList.toggle("active");

});
document.querySelectorAll(".item-link").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".item-link").classList.toggle("active");
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var planCards = document.querySelectorAll('.plan-card');

  planCards.forEach(function (card) {
    card.addEventListener('click', function () {
      planCards.forEach(function (sibling) {
        sibling.classList.remove('cardActive');
      });
      this.classList.add('cardActive');
    });
  });
});


