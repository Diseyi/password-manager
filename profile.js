
const savePasswordForm = document.querySelector(".save-password-form");
const passwordSavePassword = document.querySelector("#password-save-password");
const tagSavePassword = document.querySelector("#tag-save-password");
const savePasswordSubmitButton = document.querySelector(
  ".save-password-submit-button"
);
// const deleteButton = document.querySelectorAll(".delete-button");

const createPasswordInput = document.querySelector(".create-password-input");
const number = document.querySelector(".number");
const lower = document.querySelector(".lowerletter");
const upper = document.querySelector(".upperletter");
const symbol = document.querySelector(".symbol");
const many = document.querySelector("#many");
const checkbox = document.querySelectorAll(".checkbox");
const generateButton = document.querySelector(".generate-button");
const copy = document.querySelector(".copy");
const modal = document.querySelector(".modal");
const copyPassword = document.querySelector(".copyPassword");
const passwordContainer = document.querySelector(".password-container");
const copyAndSave = document.querySelector(".copyAndSave");
const passwordLenght = document.querySelector(".passwordLenght");
const savedPassword = document.querySelector(".savedPassword");
const titleForm = document.querySelector(".title-form");
const submit = document.querySelector(".submit");
const titleInput = document.querySelector(".titleInput");
const noPasswordCreated = document.querySelector(".no-password-created");
const titleDiv = document.querySelector(".title-div")

const uppercaseCharCode = highLowValue(65, 90);
const lowercaseCharCode = highLowValue(97, 122);
const numberCharCode = highLowValue(48, 57);
const symbolCharCode = highLowValue(33, 47)
  .concat(highLowValue(58, 64))
  .concat(highLowValue(91, 96))
  .concat(highLowValue(123, 126));

  generateButton.addEventListener("click", () => {
  const passwordSize = passwordLenght.value;
  const includeNumber = number.checked;
  const includeUpper = upper.checked;
  const includeSymbol = symbol.checked;
  const password = generatePassword(
    passwordSize,
    includeNumber,
    includeUpper,
    includeSymbol
  );
  createPasswordInput.value = password;
});

function generatePassword(
  passwordSize,
  includeNumber,
  includeUpper,
  includeSymbol
) {
  let passwordCode = lowercaseCharCode;

  if (includeUpper) passwordCode = passwordCode.concat(uppercaseCharCode);
  if (includeNumber) passwordCode = passwordCode.concat(numberCharCode);
  if (includeSymbol) passwordCode = passwordCode.concat(symbolCharCode);

  const passwordChar = [];

  for (let i = 0; i < passwordSize; i++) {
    const character =
      passwordCode[Math.floor(Math.random() * passwordCode.length)];
    passwordChar.push(String.fromCharCode(character));
  }
  return passwordChar.join("");
}

function highLowValue(low, high) {
  let array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

copy.addEventListener("click", () => {

  // Code from https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript

  if (createPasswordInput.value == "") {
    alert("create a password");
  } else {
  
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(createPasswordInput.value);
      return;
    }
    navigator.clipboard.writeText(createPasswordInput.value).then(function() {
      console.log('Copied to clickboard...');
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
    
    modal.style.display = "block";
  }
});

copyAndSave.addEventListener("click", () => {

  // Code from https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
  createPasswordModal.style.display = "none";
  titleDiv.style.display = "flex";
  
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(createPasswordInput.value);
    return;
  }
  navigator.clipboard.writeText(createPasswordInput.value).then(function() {
    console.log('Copied to clickboard...');
  }, function(err) {
      console.error('Async: Could not copy text: ', err);
  });
  console.log("hi");
});

titleForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const password = document.createTextNode(createPasswordInput.value);
  const passwordTitleNode = document.createTextNode(titleInput.value);
  const deleteNode = document.createTextNode("delete");
  const titleDiv = document.querySelector(".title-div")

  if (titleInput.value == "") {
    alert("Need Password Tag"); 
  } else {
    const passwordContainer = document.createElement("div");
    passwordContainer.classList.add("password-container");
  
    const passwordWrapper = document.createElement("div");
    passwordWrapper.classList.add("password-wrapper");
  
    const passwordTitle = document.createElement("p");
    passwordTitle.classList.add("password-title");
  
    const passwordItself = document.createElement("p");
    passwordItself.classList.add("password-itself");
  
    const deleteButton = document.createElement("button");
    deleteButton.onclick = function(e){e.target.parentElement.remove()};
    deleteButton.classList.add("delete-button");
  
    noPasswordCreated.style.display = "none";
    passwordItself.appendChild(password);
    passwordTitle.appendChild(passwordTitleNode);
    deleteButton.appendChild(deleteNode);
    passwordWrapper.appendChild(passwordTitle);
    passwordWrapper.appendChild(passwordItself);
    passwordContainer.appendChild(passwordWrapper);
    passwordContainer.appendChild(deleteButton);
    mainDiv.appendChild(passwordContainer);
  
    titleInput.value = "";
    titleDiv.style.display = "none";
    mainDiv.style.display = "block";
}})
  
  
  savePasswordForm.addEventListener("submit", (e) => {
    e.preventDefault()
  
    const password = document.createTextNode(passwordSavePassword.value);
    const passwordTitleNode = document.createTextNode(tagSavePassword.value);
    const deleteNode = document.createTextNode("delete");
  
    const passwordContainer = document.createElement("div");
    passwordContainer.classList.add("password-container");
  
    const passwordWrapper = document.createElement("div");
    passwordWrapper.classList.add("password-wrapper");
  
    const passwordTitle = document.createElement("p");
    passwordTitle.classList.add("password-title");
  
    const passwordItself = document.createElement("p");
    passwordItself.classList.add("password-itself");
  
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = function(e){e.target.parentElement.remove()};
  
    noPasswordCreated.style.display = "none";
    passwordItself.appendChild(password);
    passwordTitle.appendChild(passwordTitleNode);
    deleteButton.appendChild(deleteNode);
    passwordWrapper.appendChild(passwordTitle);
    passwordWrapper.appendChild(passwordItself);
    passwordContainer.appendChild(passwordWrapper);
    passwordContainer.appendChild(deleteButton);
    mainDiv.appendChild(passwordContainer);
  
    passwordSavePassword.value = "";
    tagSavePassword.value = "";
    savePasswordModal.style.display = "none";
    mainDiv.style.display = "block";
})