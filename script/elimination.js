const modal = document.querySelector(".modal");
const btnOpenModal = document.querySelector(".btn_open_elimination");
const close = document.querySelector(".elimination__close");

btnOpenModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});
