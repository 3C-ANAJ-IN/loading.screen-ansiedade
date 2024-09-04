
const audio = document.getElementById('audio');
const unMuteCheckbox = document.getElementById('un-mute');

audio.muted = false;

unMuteCheckbox.addEventListener('change', function () {
    if (this.checked) {
        audio.muted = false;  //desmuta
    } else {
        audio.muted = true;   //muta
    }
});

window.addEventListener('load', function () {
    if (audio.paused) {
        audio.play().catch(error => {
            console.log('Erro ao tentar tocar o áudio:', error);
        });
    }
});