const body = document.querySelector('body');

function generateNum() {
    return Math.floor(Math.random()*7);
}

function paintImage(index) {
    const image = new Image();
    image.src = `images/${index+1}.jpg`;
    image.classList.add('bg__image');
    body.prepend(image);
}

function init() {

        const bgIndex = generateNum();
        paintImage(bgIndex);

    // const bgIndex = generateNum();
    
    // body.style.background = `url(/images/${bgIndex+1}.jpg) no-repeat center center fixed`;
    // body.style.background = 'center'
}

init();