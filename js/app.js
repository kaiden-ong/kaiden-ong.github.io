function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  resetForm();
}

function resetForm() {
  document.querySelector(".form-container").reset();
}