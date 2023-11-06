const scrollButton = document.getElementById('scroll-to-top');


window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollButton.style.opacity = '1';
    scrollButton.style.visibility = 'visible';
  } else {
    scrollButton.style.opacity = '0';
    scrollButton.style.visibility = 'hidden';
  }
});


scrollButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
