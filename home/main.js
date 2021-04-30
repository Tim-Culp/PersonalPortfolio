const header = document.getElementById('headerImage');
let x = 0;
let direction = "right";
const speed = 0.03125;

let newBlock = (selector, object) => {
    let linkString = (object.type==AppTypes.PERN) ? 
    `<a target="_blank" href="${object.gitFront}" class="fab fa-react block-btn blockGitButton"> </a>
    <a target="_blank" href="${object.gitBack}" class="fas fa-server block-btn blockGitButton"></a>`: 
    `<a target="_blank" href="${object.gitLink}" class="fab fa-github block-btn blockGitButton"> </a>`
    let htmlString = `
    <div class="block">
        <img src="${object.thumbnail}" alt="" class="blockThumb">
        <div class="blockBody">
            <h3 class="blockTitle">${object.title}</h3>
            <img src="${object.thumbnail}" class="blockThumbMobile"/>
            <p class="blockText">${object.description}</p>    
            <div class="row" style="margin-top:50px; position: relative">
                <a target="_blank" href="${object.link}" class="block-btn blockSiteButton">Visit Site</a>
                <div class="block-git-btns">
                    <h3 class="block-git-title">View code on GitHub:</h3>
                    `+ linkString + `
                    <span class="block-git-btn-span"></span>
                </div>
            </div>
        </div>
    </div>
    `
    $(selector).append(htmlString);
}



//little jquery never hurt anybody
$('.whitePill').hide();
$(document).ready(() => {
    $('.whitePill').fadeIn(2000);
})

Projects.list.forEach(project => {
    newBlock('#blocksInject', project);
});

$('.fa-react').mouseenter((e)=>{
  e.target.parentElement.children[3].innerHTML = "View source code for React front end";
//   e.target.parentElement.  
})
$('.fa-react').mouseleave(e=> {
    e.target.parentElement.children[3].innerHTML = "";
})

$('.fa-server').mouseenter((e)=>{
  e.target.parentElement.children[3].innerHTML = "View source code for Node.js back end";
//   e.target.parentElement.  
})
$('.fa-server').mouseleave(e=> {
    e.target.parentElement.children[3].innerHTML = "";
})

$('.fa-github').mouseenter((e)=>{
  e.target.parentElement.children[2].innerHTML = "View source code on GitHub";
//   e.target.parentElement.  
})
$('.fa-github').mouseleave(e=> {
    e.target.parentElement.children[2].innerHTML = "";
})

const logo = $('#logo');
logo.css('left','-200px');
logo.animate({
    left: '0px'
}, 1000)

const group = $('.navbarGroup');
group.css({right: '-500px', opacity: '0', position: 'relative'});
group.delay(400);
group.animate({
    right: '0px',
    opacity: '1'
}, 1000)
//end jquery :)

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