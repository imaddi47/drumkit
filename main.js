function playKeyStroke(e){
    let key = document.querySelector(`button.key[data-key="${e.keyCode}"]`);
    if(!key) return;
    
    let aud = document.querySelector(`audio.key[data-key="${e.keyCode}"]`);
    aud.currentTime = 0;
    aud.play();
    key.classList.add("playing");
}
function playKey(){
    const keyCode = this.getAttribute("data-key");
    let key = document.querySelector(`button.key[data-key="${keyCode}"]`);
    if(!key) return;
    
    let aud = document.querySelector(`audio.key[data-key="${keyCode}"]`);
    aud.currentTime = 0;
    aud.play();
    key.classList.add("playing");
}
function removeTransition(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

const keys = document.querySelectorAll("button.key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

const buttons = document.querySelectorAll("button.key");
buttons.forEach(key => key.addEventListener('click', playKey));

window.addEventListener("keydown", playKeyStroke);