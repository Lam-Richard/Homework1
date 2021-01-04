function playAudio(sound){
    var audio = new Audio(sound);
    audio.play()
}

const wdrum = document.getElementById('wdrum');
const adrum = document.getElementById('adrum');
const sdrum = document.getElementById('sdrum');
const ddrum = document.getElementById('ddrum');
const jdrum = document.getElementById('jdrum');
const kdrum = document.getElementById('kdrum');
const ldrum = document.getElementById('ldrum');

wdrum.addEventListener('click', ()=> {
    playAudio('./sounds/tom-1.mp3');
});
adrum.addEventListener('click', ()=> {
    playAudio('./sounds/tom-2.mp3');
});
sdrum.addEventListener('click', ()=> {
    playAudio('./sounds/tom-3.mp3');
});
ddrum.addEventListener('click', ()=> {
    playAudio('./sounds/tom-4.mp3');
});
jdrum.addEventListener('click', ()=> {
    playAudio('./sounds/snare.mp3');
});
kdrum.addEventListener('click', ()=> {
    playAudio('./sounds/crash.mp3');
});
ldrum.addEventListener('click', ()=> {
    playAudio('./sounds/kick-bass.mp3');
});



