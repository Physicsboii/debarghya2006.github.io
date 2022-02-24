const form = document.querySelector(".form");
const signup = document.querySelector(".signup");
const username = document.querySelector(".username");

signup.addEventListener("click", (e) => {
  e.preventDefault();

  const email = form.querySelector(".email");
  const pass = form.querySelector(".pass");

  auth.createUserWithEmailAndPassword(email.value, pass.value).then((cred) => {
    console.log(cred);
    window.location = "/index.html";
  });
  email.value = "";
  pass.value = "";
});
