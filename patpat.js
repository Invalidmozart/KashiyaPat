let cliques = 0
const button = document.getElementById("pat");
const display = document.getElementById("count");
const mostra = document.getElementById("max");

function contaCliques() {
            cliques++;
            display.textContent = cliques;

            if(cliques == 90){
                alert("Opa! Parece que você está próximo de descobrir algo...!")
            }
            if(cliques == 100) {
                alert("Easter egg desbloqueado!!")

                const img = document.getElementById("ksy");
                img.src = "KsyPat.gif";
                max.style.display = 'block';
            }
            if(cliques == 250){
            alert("Você já descobriu o easter egg, pode relaxar, bro.");
            }
            if(cliques == 500){
            alert("Para.");
            }
            if(cliques == 900){
            alert("PARA.");
            }
            if(cliques == 1000){
            alert("Você é desempregado demais, toma uma conquista.");
                         const img = document.getElementById("ksy");
                img.src = "eminem.png";
                max.style.display = 'block';
            }
            If(cliques > 1000){
                img.src = "eminem.png";
                max.style.display = 'block';
            }
}

button.addEventListener('click', contaCliques);

  function muda() {
    
    const img = document.getElementById("ksy");

   if(img.src.match("Pat1.png")){
    img.src = "Pat2.png"
   } else {
    img.src = "Pat1.png"
   }
    
  }
