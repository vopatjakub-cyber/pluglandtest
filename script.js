// INTRO
window.onload = () => {
setTimeout(()=>{
document.getElementById("intro").style.display="none";
},1500);
};

// MUSIC
let playing = false;

function toggleMusic(){
let m = document.getElementById("music");
if(playing){
m.pause();
}else{
m.play();
}
playing = !playing;
}

// COPY IP
function copyIP(){
navigator.clipboard.writeText("play.plugland.cz");
alert("IP zkopírována!");
}

// SCROLL ANIMACE
function reveal(){
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight - 80){
el.classList.add("active");
}
});
}
window.addEventListener("scroll", reveal);