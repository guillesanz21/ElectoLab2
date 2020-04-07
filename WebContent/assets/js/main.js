const loadPartials = () => {
  // Load the header
  $(document).ready(function () {
    // $(".header").load("partials/header.html");
    $(".header").load("./partials/header.html");
  });

  // Load the footer
  $(document).ready(function () {
    $(".footer").load("./partials/footer.html");
  });
};

document.addEventListener("DOMContentLoaded", loadPartials);

// Check current page (so the navbar changes its selected page)
// NO FUNCIONA: la cosa es que al cambiar de pagina, en el nav se ilumine la pagina actual, no siempre HOME
/* let home = document.querySelector("#nav-home");
let homeSpan = document.querySelector("#nav-home sr-only");
let simulation = document.querySelector("#nav-simulation");
let simulationSpan = document.querySelector("#nav-simulation sr-only");
let info = document.querySelector("#nav-info");
let infoSpan = document.querySelector("#nav-info sr-only");

home.addEventListener("click", () => {
  homeSpan.textContent = "(current)";
  simulationSpan.textContent = "";
  InfoSpan.textContent = "";
  console.log("home");
});

simulation.addEventListener("click", () => {
  simulationSpan.textContent = "(current)";
  homeSpan.textContent = "";
  InfoSpan.textContent = "";
  console.log("simu");
});

info.addEventListener("click", () => {
  infoSpan.textContent = "(current)";
  homeSpan.textContent = "";
  simulationSpan.textContent = "";
  console.log("info");
}); */
