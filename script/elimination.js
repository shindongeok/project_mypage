const modalTest = document.querySelector(".modal");
const btnOpenModalTest = document.querySelector(".btn_open_modal");
const closeTest = document.querySelector(".close");

btnOpenModalTest.addEventListener("click", () => {
  modalTest.style.display = "flex";
});

closeTest.addEventListener("click", () => {
  modal.style.display = "none";
});

const modal = document.querySelector(".modal__elimination");
const btnOpenModal = document.querySelector(".btn_open_elimination");
const close = document.querySelector(".elimination__close");

btnOpenModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});
