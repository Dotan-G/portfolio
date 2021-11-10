function onInit() {
    let elHeader = document.querySelector('header');
    window.addEventListener('scroll', () => {
        elHeader.classList.toggle('sticky', window.scrollY > 0);
    });
}

function onOpenMenu(elMenuButton) {
    elMenuButton.classList.toggle('open');
    elMenuButton.classList.toggle('close');
    console.log(elMenuButton.classList);
    let elMenu = document.querySelector('.menu');
    elMenu.style.transform = elMenuButton.classList.contains('open')
        ? 'translate(0)'
        : 'translate(-100%)';
}
