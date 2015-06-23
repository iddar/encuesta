// var alfajor = document.querySelector('.alfajor');
// var biscoti = document.querySelector('.biscoti');
// var brow = document.querySelector('.brow');
// var mantequilla = document.querySelector('.mantequilla');
// var pastaseca = document.querySelector('.pastaseca');
// var paydequeso = document.querySelector('.paydequeso');
// var polvorones = document.querySelector('.polvorones');

var Board = document.getElementById('board');
var Task = document.querySelectorAll('.card');
var Title = document.getElementById('title');
var Encuesta = document.getElementById('encuesta');
var Resultados = document.getElementById('resultados');
var Producto = '';

localStorage.setItem('alfajor-excelente', 0);
localStorage.setItem('alfajor-bueno', 0);
localStorage.setItem('alfajor-malo', 0);

localStorage.setItem('biscoti-excelente', 0);
localStorage.setItem('biscoti-bueno', 0);
localStorage.setItem('biscoti-malo', 0);

localStorage.setItem('brow-excelente', 0);
localStorage.setItem('brow-bueno', 0);
localStorage.setItem('brow-malo', 0);

localStorage.setItem('mantequilla-excelente', 0);
localStorage.setItem('mantequilla-bueno', 0);
localStorage.setItem('mantequilla-malo', 0);

localStorage.setItem('pastaseca-excelente', 0);
localStorage.setItem('pastaseca-bueno', 0);
localStorage.setItem('pastaseca-malo', 0);

localStorage.setItem('paydequeso-excelente', 0);
localStorage.setItem('paydequeso-bueno', 0);
localStorage.setItem('paydequeso-malo', 0);

localStorage.setItem('polvorones-excelente', 0);
localStorage.setItem('polvorones-bueno', 0);
localStorage.setItem('polvorones-malo', 0);

function activity(event) {
  var element = event.target;
  var name = element.classList[1];
  Board.classList.add('hide');
  Encuesta.classList.remove('hide');
  Title.innerHTML = name;
  Producto = name;
  console.log(name);
}

function reset() {
  Encuesta.classList.add('hide');
  Board.classList.remove('hide');
}

for (var i = 0; i < Task.length; i++) {
  if (i != 6) {
    Task[i].addEventListener('click', activity, false);
  }
}

var excelente = document.getElementById('excelente');
var bueno = document.getElementById('bueno');
var malo = document.getElementById('malo');

excelente.addEventListener('click', votos, false);
bueno.addEventListener('click', votos, false);
malo.addEventListener('click', votos, false);

function votos(event) {
  var element = event.target;
  var option = element.id;

  localStorage[Producto + '-' + option]++;
  console.log(Producto + '-' + option);
  console.log(localStorage[Producto + '-' + option]);
  reset();
}

window.addEventListener("hashchange", history, false);

function history(event) {
  console.log(location.hash);
  Board.classList.add('hide');
  Resultados.classList.remove('hide');

  var respuestas = Object.keys(localStorage);
  var txt = '';
  Resultados.innerHTML = '';
  for (var key in respuestas) {
    txt = respuestas[key] + ': ' + localStorage[respuestas[key]];
    var parrafo = document.createElement("p");
    var txtElement = document.createTextNode(txt);
    parrafo.appendChild(txtElement);
    Resultados.appendChild(parrafo);
  }

}
