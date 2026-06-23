console.log("Slideshow script loaded");

const backgrounds = [
    'images/background/home-background-image-1.jpg',
    'images/background/home-background-image-2.jpg',
    'images/background/home-background-image-3.jpg',
    'images/background/home-background-image-4.jpg',
    'images/background/home-background-image-5.jpg',
    'images/background/home-background-image-6.png'
];

const bg1 = document.getElementById('bg1');
const bg2 = document.getElementById('bg2');

let currentImage =
    Number(localStorage.getItem('currentBackground')) || 0;

let showingFirst = true;

bg1.style.backgroundImage =
    `url("${backgrounds[currentImage]}")`;

function nextBackground() {
    console.log("Changing background");

    currentImage =
        (currentImage + 1) % backgrounds.length;

    localStorage.setItem(
        'currentBackground',
        currentImage
    );

    const nextImage = backgrounds[currentImage];

    if (showingFirst) {

        bg2.style.backgroundImage =
            `url("${nextImage}")`;

        bg2.style.opacity = 1;
        bg1.style.opacity = 0;

    } else {

        bg1.style.backgroundImage =
            `url("${nextImage}")`;

        bg1.style.opacity = 1;
        bg2.style.opacity = 0;
    }

    showingFirst = !showingFirst;
}

setInterval(nextBackground, 30000);