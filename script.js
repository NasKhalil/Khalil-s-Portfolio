const btnOpen = document.querySelector('.nav-btn');
const btnClose = document.querySelector('.close-btn');
const menu = document.querySelector('.nav-items');
const menuItem = document.querySelectorAll('.menu-item');

const data = [
  {
    title: 'Tonic',
    company: 'Canopi',
    role: 'Backend dev',
    year: 2015,
    img: '',
    description:'',
    tags: ['javascript', 'html', 'css']
  }
]

function openMenu() {
  btnClose.style.display = 'block';
  btnOpen.style.display = 'none';
  menu.style.display = 'block';
}

function closeMenu() {
  btnClose.style.display = 'none';
  btnOpen.style.display = 'block';
  menu.style.display = 'none';
}

btnOpen.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
menuItem.forEach((item) => {
  item.addEventListener('click', closeMenu);
});
