const backgrounds = [
    'url("../images/background/home-background-image-1.jpg")',
    'url("../images/background/home-background-image-2.jpg")',
    'url("../images/background/home-background-image-3.jpg")'
];

function nextBackground() {
    const bg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.querySelector('body').style.background = bg + ' no-repeat center center fixed';
    document.querySelector('body').style.backgroundSize = 'cover';
    document.querySelector('body').style.objectFit = 'cover';
    document.querySelector('body').style.transition = '15s ease-in-out';
}

setInterval(nextBackground,20000);
