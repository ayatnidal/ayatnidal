const info = document.getElementById('info');
const moreContent = document.getElementById('moreContent');
const toggleButton = document.getElementById('toggleButton');

let isShowMore = false;

toggleButton.addEventListener('click', () => {
  isShowMore = !isShowMore;
  
  if (isShowMore) {
    moreContent.style.display = 'block';
    toggleButton.textContent = 'Read Less';
  } else {
    moreContent.style.display = 'none';
    toggleButton.textContent = 'Read More';
  }
});