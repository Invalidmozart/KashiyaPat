const playlist = [
    { title: "Kagerou - Buck-Tick", file: "kagerou.mp3" },
    { title: "Romance - Buck-Tick", file: "romance.mp3" },
    { title: "Dress - Buck-Tick", file: "dress.mp3" },
    { title: "Hyper Love - Buck-Tick", file: "HyperLove.mp3" },
    { title: "Kurenai - X Japan", file: "Kurenai.mp3" }
];

const estado = document.getElementById('play');

let musica = 0;
const player = document.getElementById('mp3');
const titulo = document.getElementById('titulomp3');

function tocaMus(index) {
    player.src = playlist[index].file;
    titulo.innerText = playlist[index].title;
}

tocaMus(musica);

document.getElementById('play').addEventListener('click', () => {
    if (player.paused) {
        player.play();
        estado.innerHTML = "Pause";
    } else {
        player.pause();
        estado.innerHTML = "Play";
    }
});

document.getElementById('next').addEventListener('click', () => {
    musica = (musica + 1) % playlist.length;
    tocaMus(musica);
    player.play();
});

document.getElementById('prev').addEventListener('click', () => {
    musica = (musica - 1 + playlist.length) % playlist.length;
    tocaMus(musica);
    player.play();
});

