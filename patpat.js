const button = document.getElementById("pat");

button.addEventListener("click", (event) => {
  count.textContent = `${event.detail}`;
});

  function muda() {
    
    const img = document.getElementById("ksy");

   if(img.src.match("Pat1.png")){
    img.src = "Pat2.png"
   } else {
    img.src = "Pat1.png"
   }
    
  }



