let cliques = 0
const button = document.getElementById("pat");
const display = document.getElementById('count');

//button.addEventListener("click", (event) => {count.textContent = `${event.detail}`;});

function contaCliques() {
            cliques++;
            display.textContent = cliques;

            if(cliques >= 90){
                alert("Opa! Parece que você está próximo de descobrir algo...!")
            }
            else if(cliques >= 100) {
                alert("e")
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


