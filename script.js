function revealVideo(element) {
  const content = element.querySelector('.reveal-content');
  const video = content.querySelector('.video');

  content.classList.remove('hidden');
  setTimeout(() => {
    content.style.opacity = '1';
    content.style.transform = 'translateY(0)';
  }, 50);

  setTimeout(() => {
    video.classList.remove('hidden');
    video.style.opacity = '1';
    video.style.transform = 'scale(1)';
  }, 1000); 
}
