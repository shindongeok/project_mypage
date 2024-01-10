const modal = document.querySelector(".modal");
const btnOpenModal = document.querySelector(".btn_open_modal");
const close = document.querySelector(".close");

btnOpenModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});
