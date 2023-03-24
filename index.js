const btn = document.querySelectorAll("button");
console.log(btn)

const w = new Audio("/sounds/tom-1.mp3");
const a = new Audio("/sounds/tom-2.mp3");
const s = new Audio("/sounds/tom-3.mp3");
const d = new Audio("/sounds/tom-4.mp3");
const j = new Audio("/sounds/snare.mp3");
const k = new Audio("/sounds/crash.mp3");
const l = new Audio("/sounds/kick-bass.mp3")

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
            w.play();
            break;
        case "a":
            a.play();
            break;
        case "s":
            s.play();
            break;
        case "d":
            d.play();
            break;
        case "j":
            j.play();
            break;
        case "k":
            k.play();
            break;
        case "l":
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