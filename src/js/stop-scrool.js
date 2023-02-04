const elBody = document.querySelector('body');

elBody.addEventListener('click', e => {
    const checkModal = document.querySelector('.active');
    if (checkModal) {
        elBody.style.overflow = 'hidden';
    } else {
        elBody.style.overflow = 'auto';
    }
})

