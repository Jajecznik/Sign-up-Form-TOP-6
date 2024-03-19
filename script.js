const form = document.getElementById("form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const submitBtn = document.getElementById("submit-btn");

form.addEventListener('submit', (event) => {
    const wrongPasswords = document.querySelector(".wrong-passwords");
    let pass1 = password.value;
    let pass2 = confirmPassword.value;

    if (pass1.length < 4 || pass1.length > 24
        || pass2.length < 4 || pass2.length > 24
        || pass1.includes(" ") || pass1.includes(" ")
        || pass1 !== pass2) {
        event.preventDefault();
        password.value = "";
        confirmPassword.value = "";

        if (!wrongPasswords) {
            let errorInfo = document.createElement('p');
            errorInfo.classList.add('wrong-passwords');
            errorInfo.innerText = "The passwords you enter must be the same and cannot contain spaces.";
            submitBtn.after(errorInfo);
        }
    } else if (wrongPasswords) {
        wrongPasswords.remove();
    }
});