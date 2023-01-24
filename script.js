const navbarToggler = document.getElementsByClassName('navbar-toggler')[0];
const collapse = document.getElementsByClassName('collapse')[0];

navbarToggler.addEventListener('click', () => {
    collapse.classList.toggle('show')
})