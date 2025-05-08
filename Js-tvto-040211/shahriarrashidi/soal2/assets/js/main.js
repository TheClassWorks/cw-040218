let data = ["assets/image/1.jpg", "assets/image/2.jpg", "assets/image/3.jpg"];
let image = document.getElementById("img");
let i = 0;
function myfuc() {
  setInterval(function () {
    for (let s = 0; s < 3; s++) {
      i++;
      if (i == 2) {
        i = 0;
      }

      image.setAttribute("src", data[i]);
    }
    console.log("dsdf");
  }, 3000);
}
myfuc();
