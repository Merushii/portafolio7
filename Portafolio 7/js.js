function navbar () {
  const navbarMenu = document.querySelector('.container__nav-web')
  document.addEventListener('click', (e) => {
    if(e.target.closest('.navbar--menu__icon')){
      navbarMenu.classList.toggle('show--menu')
    }
  })
}

export default navbar