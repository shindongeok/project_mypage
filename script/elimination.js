// 회원수정 모달창 띄우고 닫기
const modalTest = document.querySelector(".modal");
const btnOpenModalTest = document.querySelector(".btn_open_modal");
const closeTest = document.querySelector(".close");

btnOpenModalTest.addEventListener("click", () => {
  modalTest.style.display = "flex";
});

closeTest.addEventListener("click", () => {
  modal.style.display = "none";
});

// 회원탈퇴 모달창 띄우고 닫기
const modal = document.querySelector(".modal__elimination");
const btnOpenModal = document.querySelector(".btn_open_elimination");
const close = document.querySelector(".elimination__close");

btnOpenModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});
