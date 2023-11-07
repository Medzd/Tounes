var openModalButton = document.getElementById("openModal");
var closeModalButton = document.getElementById("closeModal");
var modal = document.getElementById("myModal");

openModalButton.onclick = function() {
    modal.style.display = "block";
}

closeModalButton.onclick = function() {
    modal.style.display = "none";
}
