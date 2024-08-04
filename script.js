let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');
document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});
previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});
const slideContainer = document.querySelector('.slide-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = slideContainer.querySelectorAll('img');
let currentSlide = 0;
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  slideContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  slideContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
setInterval(nextSlide, 2000);
const myLink = document.querySelector('a');
myLink.addEventListener('click', () => {
    alert(' Mua hàng thành công!!');
});