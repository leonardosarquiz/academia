export default function sessaoQuatro() {
  const carousel = document.querySelector('.sessao4');
  const images = carousel.querySelector('.containerplanos');
  const prevBtn = document.querySelector('.esq');
  const nextBtn = document.querySelector('.abc');

  let imageIndex = 0;

  prevBtn.addEventListener('click', () => {
    imageIndex = imageIndex > 0 ? imageIndex - 1 : 0;
    images.style.transform = `translateX(-${(imageIndex * 100) / 3}%)`;
  });

  nextBtn.addEventListener('click', () => {
    imageIndex = imageIndex < 4 ? imageIndex + 1 : 4;
    images.style.transform = `translateX(-${(imageIndex * 100) / 3}%)`;
  });

  let isDragging = false;
  let startPosition = 0;
  let currentTranslate = 0;
  let previousTranslate = 0;

  images.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPosition = e.clientX;
    images.style.cursor = 'grabbing';
  });

  images.addEventListener('mousemove', (e) => {
    if (isDragging) {
      currentTranslate = previousTranslate + e.clientX - startPosition;
      images.style.transform = `translateX(${currentTranslate}px)`;
    }
  });

  images.addEventListener('mouseup', () => {
    isDragging = false;
    previousTranslate = currentTranslate;
    images.style.cursor = 'grab';
  });

  images.addEventListener('mouseleave', () => {
    isDragging = false;
    images.style.cursor = 'grab';
  });
}
