let photos = document.getElementById("photo");
let right = document.querySelector(".right");
let left = document.querySelector(".left");
let data = ["assets/images/Untitled.png", "assets/images/Untitled1.png", "assets/images/Untitled2.png"];
index = 0;

setInterval((nextImage) => {
  index++;
  if (index=3) index = 0;
  photos.setAttribute("src", data[index]);
}, 2000);
