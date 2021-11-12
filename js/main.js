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
    elMenu.classList.toggle('open-menu');
    let elBody = document.querySelector('body');
    elBody.classList.toggle('hide-scroll');
}
