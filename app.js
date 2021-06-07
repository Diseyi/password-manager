const getStartedButton = document.querySelector(".get-started-button");
const signupDiv = document.querySelector(".signup-div");
const signinDiv = document.querySelector(".signin-div");
const article = document.querySelector(".article");
const signupLink = document.querySelector(".signup-link");
const signinLink = document.querySelector(".signin-link");

getStartedButton.addEventListener("click", () => {
    signupDiv.style.display = "block";
    article.style.display = "none";
})

signupLink.addEventListener("click", () => {
    signupDiv.style.display = "block";
    signinDiv.style.display = "none";
})

signinLink.addEventListener("click", () => {
    signinDiv.style.display = "block";
    signupDiv.style.display = "none";
})

