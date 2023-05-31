// henter modal effekten / elementet
var modal = document.getElementById("under-ekstrudering");

// Henter knappens ID som skal åbne modal effekten
var btn = document.getElementById("under-btn");

// Bruger Span elementet som skal lukke modal boxen
var span = document.getElementsByClassName("close")[0];

// Når man klikker på elementet, åbner effekten.
btn.onclick = function() {
  modal.style.display = "block";
}

// Når brugeren klikker på (x) lukker boxen ned
span.onclick = function() {
  modal.style.display = "none";
}

// Når brugeren klikker uden om modal boxen, lukkes den ned.
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
