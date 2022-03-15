const images = ['01.jpeg', '02.jpeg', '03.jpg', '04.jpeg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.src = `IMG/${chosenImage}`;

document.body.appendChild(bgImage);
console.log(bgImage)