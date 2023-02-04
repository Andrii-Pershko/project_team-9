const elBody = document.querySelector('body');

elBody.addEventListener('click', e => {
    const checkModal = document.querySelector('.active');
    if (checkModal) {
        elBody.style.overflow = 'hidden';
        console.log('Active')
    } else {
        console.log('NO Active');
        elBody.style.overflow = 'auto';
    }
})

