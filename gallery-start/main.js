const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const thumbImages = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];


/* Declaring the alternative text for each image file */
const thumbAlt = {
    'pic1.jpg': 'Zoomed in eye',
    'pic2.jpg': 'Desert rock image',
    'pic3.jpg': 'purple and white flower',
    'pic4.jpg': 'Egyptian archive',
    'pic5.jpg': 'Butterfly and leaf synergy',
}

/* Looping through images */

for (let pictures of thumbImages) {
let newImage = document.createElement('img');
newImage.setAttribute('src', 'images/' + pictures);
newImage.setAttribute('alt', thumbAlt);
thumbBar.appendChild(newImage);
    newImage.addEventListener('click', event => {
        displayedImage.src = event.target.src;
        displayedImage.alt = event.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    let button = btn.getAttribute("class");
    if (classBtn === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = '#000';
        overlay.style.opacity = '0.5';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = '#000';
        overlay.style.opacity = '0';
    };
});
