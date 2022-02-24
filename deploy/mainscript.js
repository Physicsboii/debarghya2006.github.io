const logout = document.querySelector(".logout");
const signup = document.querySelector(".signup");
const login = document.querySelector(".login");
const account = document.querySelector(".account");
const account1 = document.querySelector(".account1");
const signupmobi = document.querySelector(".signupmobi");
const loginmobi = document.querySelector(".loginmobi");
const logoutmobi = document.querySelector(".logoutmobi");

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

auth.onAuthStateChanged((user) => {
  if (user) {

        account.innerText=`Logged in as ${user.email}`;
        account1.innerText=`Logged in as ${user.email}`;


    signup.style.display = "none";
    login.style.display = "none";
    logout.style.display = "block";
    signupmobi.style.display = "none";
    loginmobi.style.display = "none";
    logoutmobi.style.display = "block";
  } else {
    account.innerText = "Not logged in";
    account1.innerText = "Not logged in";
    signup.style.display = "block";
    login.style.display = "block";
    logout.style.display = "none";
    signupmobi.style.display = "block";
    loginmobi.style.display = "block";
    logoutmobi.style.display = "none";
  }
});
logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log("LOGGED OUT");
  });
});
logoutmobi.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log("LOGGED OUT");
  });
});
