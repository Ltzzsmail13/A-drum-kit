const btn = document.querySelectorAll("button");
console.log(btn)


btn.forEach( button => button.addEventListener("click", function(){
    const btnInnerHtml = this.innerHTML;
    makeSound(btnInnerHtml)
    buttonAnimation(btnInnerHtml)
}) )


document.addEventListener("keypress", function(e){
    makeSound(e.key)
    buttonAnimation(e.key)
})

const makeSound = (key) => {

    switch (key) {
        case "w":
            const w = new Audio("/sounds/tom-1.mp3");
            w.play();
            break;
            
        case "a":
            const a = new Audio("/sounds/tom-2.mp3");
            a.play();
            break;
            
        case "s":
            const s = new Audio("/sounds/tom-3.mp3");  
            s.play();
            break;
            
        case "d":
            const d = new Audio("/sounds/tom-4.mp3");
            d.play();
            break;
            
        case "j":
            const j = new Audio("/sounds/snare.mp3");
            j.play();
            break;
            
        case "k":
            const k = new Audio("/sounds/crash.mp3");
            k.play();
            break;
            
        case "l":
            const l = new Audio("/sounds/kick-bass.mp3")
            l.play();
            break;        
        default:
            console.log(btnInnerHtml);
            break;
    }

}

const buttonAnimation = (currentKey) => {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed")
    },100);
}
