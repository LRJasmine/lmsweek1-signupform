const signupform = document.getElementById("signupform");
signupform.addEventListener("submit", verifyForm);
// const submitbtn = document.getElementById("createaccount");
const pwordfield = document.getElementById("password");
const confirmpwordfield = document.getElementById("confirmpassword");
const perrormsg = document.getElementsByClassName("passwordNotMatch");
const successmsg = document.getElementById("successmsg");

function verifyForm(event) {
  event.preventDefault();
  
  const pword = signupform.password.value;
  const confirmpword = signupform.confirmpassword.value;

  if (pword !== confirmpword) {
    pwordfield.classList.add("error");
    confirmpwordfield.classList.add("error");
    Object.entries(perrormsg).forEach(([key, value]) => { value.style.display = "block" });
  } 
  else {
    const signupFormData = new FormData(event.target);
    pwordfield.classList.remove("error");
    confirmpwordfield.classList.remove("error");
    Object.entries(perrormsg).forEach(([key, value]) => { value.style.display = "none" });
    
    const signupFormDataObj = Object.fromEntries(signupFormData.entries())
    console.log(signupFormDataObj);
    successmsg.style.display = "block";
    const removemsg = setTimeout(() => {
      successmsg.style.display = "none";
    }, 3000);
    signupform.reset();
  }
}
