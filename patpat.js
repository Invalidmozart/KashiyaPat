const button = document.getElementById("pat");

button.addEventListener("click", (event) => {
  count.textContent = `${event.detail}`;
});

  function muda() {
    const img = document.getElementById("ksy");

   if(img.src.match("KashiFumo.png")){
    img.src = "PapaiSaiu.png"
   } else {
    img.src = "KashiFumo.png"
   }
    
  }

