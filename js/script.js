// array whit images
const imagesArray = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];
// container html
const imagesContainer = document.querySelector('.slider-items');
// loop to display array on html
for (let i = 0; i < imagesArray.length; i++) {
    const currentImage = imagesArray[i];
    const sliderItems = `<div class="item"><img src="${currentImage}" alt="image"></div>`;
    imagesContainer.innerHTML += sliderItems;
}

// add "active" class to the first element
const itemsArray = document.getElementsByClassName('item');

let activeItem = 0;
itemsArray[activeItem].classList.add('active');

// buttons management
const upBtn = document.querySelector(".up-btn");
const downBtn = document.querySelector(".down-btn");

// hide the up button
upBtn.style.display = "none";

// click function for up-button
upBtn.addEventListener('click', function () {
    downBtn.style.display = "block";
    if (activeItem > 0) {
        itemsArray[activeItem].classList.remove('active');
        activeItem--;
        itemsArray[activeItem].classList.add('active');
    }
    // hide the up button if it reaches the first item
    if (activeItem === 0) {
        upBtn.style.display = "none";
    }
})

// click function for down-button
downBtn.addEventListener('click', function () {
    upBtn.style.display = "block";
    if (activeItem < (imagesArray.length - 1)) {
        itemsArray[activeItem].classList.remove("active");
        activeItem++;
        itemsArray[activeItem].classList.add("active");
    }
    // hide the down button if it reaches the last item
    if (activeItem === imagesArray.length - 1) {
        downBtn.style.display = "none";
    }
});

// function setInterval
setInterval(function () {
    if (activeItem < (imagesArray.length - 1)) {
        itemsArray[activeItem].classList.remove("active");
        activeItem++;
        itemsArray[activeItem].classList.add("active");
    } else {
        itemsArray[activeItem].classList.remove("active");
        activeItem = 0;
        itemsArray[activeItem].classList.add("active");
    }
    // hide the up button if it reaches the first item
    if (activeItem === 0) {
        upBtn.style.display = "none";
    } else {
        upBtn.style.display = "block";
    }
    // hide the down button if it reaches the last item
    if (activeItem === imagesArray.length - 1) {
        downBtn.style.display = "none";
    } else {
        downBtn.style.display = "block";
    }
}, 3000);



