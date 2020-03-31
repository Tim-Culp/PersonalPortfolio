const header = document.getElementById('headerImage');
let x = 0;
let direction = "right";
const speed = 0.03125;
setInterval(() => {
    if (header.style.backgroundPositionX != "100%" && direction == "right") {
        x += speed;
        header.style.backgroundPositionX = x + "%";
    } else if(direction == "right") {
        direction = "left";
    } else if (header.style.backgroundPositionX != "0%"){
        x -= speed;
        header.style.backgroundPositionX = x + "%";
    } else if (direction == "left") {
        direction = "right";
    }

// console.log(window.innerWidth);

}, 40)