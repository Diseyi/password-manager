const menuHeader = document.querySelector(".menu-header");
const menuDiv = document.querySelector(".menu-div");
const profileMain = document.querySelector(".profile-main");
const mainDiv = document.querySelector(".main-div");
const profileHeader = document.querySelector(".profile-header");
const closeMenu = document.querySelector(".close-menu");
const openMenu = document.querySelector(".open-menu");
const deleteButton = document.querySelector(".delete-button");
const saveAPassword = document.querySelector(".save-a-password");
const savePasswordModal = document.querySelector(".save-password-modal");
const closeSavePasswordModal = document.querySelectorAll(
  ".close-save-password-modal"
);
const createAPassword = document.querySelector(".create-a-password");
const createPasswordModal = document.querySelector(".create-password-modal");

openMenu.addEventListener("click", () => {
    profileHeader.style.display = "none";
    menuHeader.style.display = "flex";
    menuDiv.style.height = "100%";
  });
  
  closeMenu.addEventListener("click", () => {
    menuHeader.style.display = "none";
    profileHeader.style.display = "flex";
    menuDiv.style.height = "0";
  });
  
  saveAPassword.addEventListener("click", () => {
    menuDiv.style.height = "0";
    menuHeader.style.display = "none";
    profileHeader.style.display = "flex";
    savePasswordModal.style.display = "block";
    mainDiv.style.display = "none";
  });
  
  createAPassword.addEventListener("click", () => {
    createPasswordInput.value = ""
    modal.style.display = "none"
    menuDiv.style.height = "0";
    menuHeader.style.display = "none";
    profileHeader.style.display = "flex";
    createPasswordModal.style.display = "block";
    mainDiv.style.display = "none";
  });
  
  for (let i = 0; i < closeSavePasswordModal.length; i++) {
    closeSavePasswordModal[i].addEventListener("click", () => {
      savePasswordModal.style.display = "none";
      createPasswordModal.style.display = "none";
      mainDiv.style.display = "block";
      modal.style.display = "none"
    });
  }
  
  
    deleteButton.addEventListener("click", ( ) => {
      
      console.log("ju");
      // let item = e.target.parentNode
      // item.remove()
      
      // deleteButton[i].style.color = "green";
    });
  