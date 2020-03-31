const access = document.getElementById('access');
const panel = document.getElementById('panel');
const accessText = document.getElementById('accessText');
let accessTextFrames = ["Hello, user. Click the button to continue.|", "Hello, user. Click the button to continue."]
const accessButton = document.querySelector('#access div button');

const puzzleBlock = document.getElementById('puzzleBlock');
const puzzleHole = document.getElementById('puzzleHole');

let i = false;

let state = "main"

// if (state == "main") {
    const mainAnim = setInterval(() => {
        if (i) {
            accessText.innerText = accessTextFrames[0]
            i = false;
        } else {
            accessText.innerText = accessTextFrames[1]
            i = true;
        }
    }, 500);
// }

/* const puzzleClock = setInterval(() => {

}, 20) */

// mainAnim();
const checkPuzzle = () => {
    let collided = false;
    let px = parseInt(puzzleBlock.style.left.slice(0, puzzleBlock.style.left.length-2));
    let hx = parseInt(puzzleHole.style.left.slice(0, puzzleHole.style.left.length-2));
    let py = parseInt(puzzleBlock.style.top.slice(0, puzzleBlock.style.top.length-2)); 
    let hy = parseInt(puzzleHole.style.top.slice(0, puzzleHole.style.top.length-2));
    let pw = parseInt(puzzleBlock.style.width.slice(0, puzzleBlock.style.width.length-2));
    let ph = parseInt(puzzleBlock.style.height.slice(0, puzzleBlock.style.height.length-2));
    let hw = parseInt(puzzleHole.style.width.slice(0, puzzleHole.style.width.length-2));
    let hh = parseInt(puzzleHole.style.height.slice(0, puzzleHole.style.height.length-2));

    if (px <= hx && (px + pw) >= hx && py <= hy && (py + ph) >= hy) {
        // console.log("COLLIDED");
        collided = true;
    } else if (px >= hx && px <= hx + hw && py <= hy && (py + ph) >= hy) {
        // console.log("COLLIDED");
        collided = true;
    } else if (px >= hx && px <= hx + hw && py >= hy && py <= hy + hh) {
        // console.log("COLLIDED");
        collided = true;
    } else if (px <= hx && (px + pw) >= hx && py >= hy && py <= hy + hh) {
        // console.log("COLLIDED");
        collided = true;
    }

    if (collided) {
        // console.log("confirm animation and load page");
        puzzleBlock.onmousedown = null;
        puzzleBlock.style.top = puzzleHole.style.top;
        puzzleBlock.style.left = puzzleHole.style.left;
        clearInterval(mainAnim);
        accessText.innerText = "Confirmed."
        accessText.style.color = "green";
        accessText.style.textShadow = "0 0 6px green";
        setTimeout(() => { 
            window.location.href = "./home/home.html";
            // console.log("load page PLEASE")
        }, 2000)
    }
}


accessButton.addEventListener('click', e => {
    let state = "puzzle";
    // clearInterval(mainAnim);
    accessTextFrames = ["Please drop the square into the hole.|", "Please drop the square into the hole."];
    accessButton.style.display = "none";
    puzzleBlock.style.display = "block";
    puzzleHole.style.display = "block";
    puzzleBlock.onmousedown = e => {
        let xOffset = 370 / 1158 * window.innerWidth;
        let yOffset = 370 / 735 * window.innerHeight;
        e = window.event;

        puzzleBlock.style.top = (e.clientY - access.offsetTop - 15) + "px";
        puzzleBlock.style.left = (e.clientX - access.offsetLeft - 15) + "px";
        // console.log(e.clientX, e.clientY);

        document.onmouseup = () => {
            document.onmouseup = null;
            document.onmousemove = null;
            checkPuzzle();
        }

        document.onmousemove = (e) => {
            puzzleBlock.style.top = (e.clientY - access.offsetTop - 15) + "px";
            puzzleBlock.style.left = (e.clientX - access.offsetLeft - 15) + "px";
            // accessText.innerText = [e.clientX, e.clientY, window.innerWidth, window.innerHeight].toString();
        }
    }

})