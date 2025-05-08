let time = new Date()
console.log(time);
let zaman = document.getElementById("zaman")
setInterval(() => {
    zaman.value=time
}, 1000);
