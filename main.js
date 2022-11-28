const shareBtn = document.getElementById("sharebtn");
const activeSocial = document.getElementById("activesocial");
const shareIcon = document.querySelector(".share-icon");
shareBtn.addEventListener("click",(eo) => {
    activeSocial.classList.toggle("active");
    shareIcon.classList.toggle("active");
})