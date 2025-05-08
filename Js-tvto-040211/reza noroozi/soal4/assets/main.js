let in1 = document.getElementById("input1");
let in2 = document.getElementById("input2");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  if (in1 == "ali" || "sara" || "reza") {
    location.href =
      "https://www.google.com/search?q=boost+mobile&rlz=1C1GCEA_enIR1015IR1015&oq=bo&gs_lcrp=EgZjaHJvbWUqBwgBEAAYjwIyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIHCAMQABiPAtIBCTcyMTdqMGoxNagCALACAQ&sourceid=chrome&ie=UTF-8";

    console.log("به سایت ما خوش امدید");
  } else {
    console.log("رمز یا پسورد اشتباه است");
  }
});

btn.addEventListener("click", function () {
  if (in2 == "123" || "456" || "789") {
    localStorage.href =
      "https://www.google.com/search?q=boost+mobile&rlz=1C1GCEA_enIR1015IR1015&oq=bo&gs_lcrp=EgZjaHJvbWUqBwgBEAAYjwIyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIHCAMQABiPAtIBCTcyMTdqMGoxNagCALACAQ&sourceid=chrome&ie=UTF-8";

    console.log("به سایت ما خوش امدید");
  } else {
    console.log("رمز یا پسورد اشتباه است");
  }
});
