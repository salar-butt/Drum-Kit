window.addEventListener('keydown',(e)=>{
    console.log(e.keyCode,"code ");
var audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
var key=document.querySelector(`.key[data-key="${e.keyCode}"]`)

console.log(audio)
if(audio){
    audio.play()
    audio.currentTime=0
    key.classList.add("play")
    setTimeout(()=>{
        key.classList.remove("play"),100
    })
}
return
})
