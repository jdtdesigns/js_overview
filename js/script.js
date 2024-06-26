const button = document.querySelector('button');

function amaze() {
  const body = document.body;

  body.classList.toggle('amaze');
}

button.addEventListener('click', amaze);