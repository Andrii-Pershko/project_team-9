(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  const myCloseBtnHow = document.querySelector('[myCloseBtnHow]')
  myCloseBtnHow.addEventListener('click', toggleModal);

  const myCloseBtnOur = document.querySelector('[myCloseBtnOur]')
  myCloseBtnOur.addEventListener('click', toggleModal);

  const myCloseBtnContact = document.querySelector('[myCloseBtnContact]')
  myCloseBtnContact.addEventListener('click', toggleModal);

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();