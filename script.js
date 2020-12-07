const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

window.addEventListener('load', setDefaultConfig())

function setDefaultConfig() {
  const themeSelected = localStorage.getItem('theme') || 'light';

  configureStyleMode(themeSelected);

  themeSelected === 'dark' ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light');

  themeSelected === 'dark' ? toggleSwitch.checked = 'true' : null;

}

// Configure aditional styles
function configureStyleMode(style) {
  changeStyleBackground(nav, style === 'light' ? '255 255 255':'0 0 0')
  changeStyleBackground(textBox, style === 'light' ? '0 0 0' : '255 255 255');

  toggleIconContent(style);

  changeImgSource(style)
   
}

function changeStyleBackground(element, color) {
  element.style.background = `rgb(${color} / 50%)`;
}

function toggleIconContent(style) {
  toggleIcon.children[0].textContent = `${style.charAt(0).toUpperCase() + style.slice(1)} Mode`;
  style === 'dark' ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  
}

function changeImgSource(style) {
   image1.src = `img/undraw_proud_coder_${style}.svg`;
   image2.src = `img/undraw_feeling_proud_${style}.svg`;
   image3.src = `img/undraw_conceptual_idea_${style}.svg`;
}

// Switch theme dynamically
function switchTheme(event) {
  const isChecked = event.target.checked;

  if (isChecked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    configureStyleMode('dark');
    localStorage.setItem('theme','dark')
    
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    configureStyleMode('light');
    localStorage.setItem('theme','light')

  }
  
 }

// Event listener
toggleSwitch.addEventListener('change', switchTheme);