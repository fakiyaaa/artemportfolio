let filterItems = document.querySelectorAll('.item-link');
let filterImages = document.querySelectorAll('.project-img');

window.addEventListener('load', () => {
  filterItems.forEach(item => {
    item.addEventListener('click', (selectedItem) => {
      // Remove the active class from the previously selected item
      document.querySelector('.menu-active').classList.remove('menu-active');
      // Add active class to the currently selected item
      selectedItem.target.classList.add('menu-active');

      let filterName = selectedItem.target.getAttribute('data-name');

      // Loop through images and filter based on data-name attribute
      filterImages.forEach((image) => {
        let filterImageName = image.getAttribute('data-name');
        if ((filterImageName === filterName) || filterName === 'all') {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      });
    });
  });
});