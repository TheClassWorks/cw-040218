let username = document.getElementById("username");
let password = document.getElementById("password");
let loginBtn = document.getElementById("login");
let cancelBtn = document.getElementById("cancel");
loginBtn.addEventListener("click", () => {
  if (username.value == NaN) {
    alert("نام کاربری باید حروف باشد");
  } else if (password.value != NaN) {
    alert("گذرواژه باید عدد باشد")
  }
});
