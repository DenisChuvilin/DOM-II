const image = document.querySelectorAll('img');

image.forEach(img => {
  img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.1)';
    img.style.transition = 'transform 1s';
  });
});

image.forEach(img => {
  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
    img.style.transition = 'transform 1s';
  });
});

const text = document.querySelectorAll('p');
text.forEach(txt =>
  window.addEventListener('scroll', () => {
    txt.style.color = 'orange';
  })
);

const removeTxt = document.querySelectorAll('p');

removeTxt.forEach(txt =>
  txt.addEventListener('select', () => {
    txt.textContent = '';
  })
);
