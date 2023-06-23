const pessoa = document.querySelector('.pessoa');

const jump = () => {
  pessoa.classList.add('jump');

  setTimeout(()=> {

  }, 500);
}

document .addEventListener('keydown', jump)