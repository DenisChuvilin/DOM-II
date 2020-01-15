// transform size of the fun bus
const fun_bus_img = document.querySelector('img');

fun_bus_img.addEventListener('mouseenter', () => {
  fun_bus_img.style.transform = 'scale(1.2)';
  fun_bus_img.style.transition = 'all 0.3s';
});

fun_bus_img.addEventListener('mouseleave', () => (fun_bus_img.style.transform = 'scale(1)'));

// change color of header logo
const logo = document.querySelector('.logo-heading');

logo.addEventListener('mouseenter', () => (logo.style.color = 'green'));
logo.addEventListener('mouseleave', () => (logo.style.color = 'black'));

// transform all images when scrolling
const all_imgs = document.querySelectorAll('img');

window.addEventListener('scroll', () => all_imgs.forEach(e => (e.style.transform = 'scale(.5)')));

//header bar turns blue
const header_bar = document.querySelector('.main-navigation');
header_bar.addEventListener('dblclick', () => (header_bar.style.backgroundColor = 'blue'));

//border appears for each topic and text

const section_block = document.getElementsByTagName('section');
Array.from(section_block).forEach(block => {
  block.addEventListener('mouseenter', () => (block.style.border = '8px dotted blue'));
  block.addEventListener('mouseleave', () => (block.style.border = 'none'));
});
