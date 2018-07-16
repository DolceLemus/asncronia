let gallery = document.querySelector('.gallery-container');
// agregamos un evento al padre de los elementos de la galeria.
gallery.addEventListener('click', e => {
    /* Antes de entrar a este if, el evento esta recorriendo los elementos
     en una fase de capturing.*/
  if(e.target.classList.contains('gallery-item')){
    /*Este if reconoce el elemento hijo al que queremos darle el evento,
     con esto reducimos la iteracion sobre los nodos con clase gallery-item*/
    e.target.style.backgroundColor = "red";
  }
});