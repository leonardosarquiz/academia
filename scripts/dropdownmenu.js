export default function dropDown() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  if (menuButton && menuList) {
    menuButton.addEventListener('click', toggleDropdown);
    document.addEventListener('click', closeDropdown);
  }

  function toggleDropdown() {
    if (menuList.style.display === 'none') {
      menuList.style.display = 'block';
    } else {
      menuList.style.display = 'none';
    }
  }

  function closeDropdown(event) {
    if (
      menuList &&
      !menuList.contains(event.target) &&
      event.target !== menuButton &&
      menuList.style.display === 'block'
    ) {
      menuList.style.display = 'none';
    }
  }
}
