const barra = document.getElementById('tempo');
const tempoAtual = document.getElementById('temAtu');
const tempoTotal = document.getElementById('temTot');

function correto(segundos) {
    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60);
    return `${min}:${seg < 10 ? '0' + seg : seg}`;
}

player.addEventListener('timeupdate', () =>{
    const porcentagem = (player.currentTime / player.duration) * 100;
    
    barra.style.width = `${porcentagem}%`;
    
    tempoAtual.innerHTML = correto(player.currentTime);
});

player.addEventListener('loadedmetadata', () => {
    tempoTotal.innerText = correto(player.duration);
});

const containerBarra = document.getElementById('barra');

containerBarra.addEventListener('click', (e) => {
    const largura = containerBarra.clientWidth;
    const cliqueX = e.offsetX;
    const duracaoMusica = player.duration;
    
    player.currentTime = (cliqueX / largura) * duracaoMusica;
});