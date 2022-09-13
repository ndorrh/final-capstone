const hamburger = document.getElementById('button');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const openBtnClassList = openBtn.classList;

hamburger.addEventListener('click', () => {
  if (openBtnClassList.contains('d-none')) {
    openBtn.classList.remove('d-none');
    closeBtn.classList.add('d-none');
  } else {
    openBtn.classList.add('d-none');
    closeBtn.classList.remove('d-none');
  }
});