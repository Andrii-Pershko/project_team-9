const elBody = document.querySelector('body');
const elHeader = document.querySelector('header')

elBody.addEventListener('click', e => {
    const checkModal = document.querySelector('.active');
    if (checkModal) {
        elBody.style.overflow = 'hidden';
        elHeader.style.zIndex = '2';



    } else {
        elBody.style.overflow = 'auto';

    }
})

