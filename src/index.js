import './style.css';
import startApp from './js/htmlManipulation';

const resetButton = document.querySelector('.button-reset');

resetButton.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    location.reload();
  }
})

startApp();
