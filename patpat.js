const button = document.getElementById("pat");

button.addEventListener("click", (event) => {
  button.textContent = `Cliques: ${event.detail}`;
});