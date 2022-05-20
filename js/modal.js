const modalContainer = document.querySelector(".modal-image-container");
const modalPopup = document.querySelector(".modal-popup");
const closeModal = document.querySelector(".close-modal");

modalContainer.addEventListener("click", () => {
  modalPopup.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modalPopup.style.display = "none";
});

window.onclick = function (e) {
  if (e.target === modalPopup) {
    modalPopup.style.display = "none";
  }
};
