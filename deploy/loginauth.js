const form = document.querySelector(".form")
const login = document.querySelector(".login")




//logout

//login
login.addEventListener("click",(e)=>{

    e.preventDefault();
    const email = form.querySelector(".email");
    const pass = form.querySelector(".pass");
    auth.signInWithEmailAndPassword(email.value,pass.value).then(cred =>{

        console.log(cred);
        window.location = "/index.html"
        

    })
    email.value= "";
    pass.value = "";
        
});
