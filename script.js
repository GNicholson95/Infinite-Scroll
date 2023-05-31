const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unsplash API
const query = 'japan night'
const count = 30;
const apiKey ='lqAjiBv4OmYA2JF-56kxqb29zfqh9wAJ3Woesu0ne-Q';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&query=${query}&count=${count}`

// check if all images was loaded
function imageLoaded(){
    console.log(imagesLoaded)
    imagesLoaded++;
    if(imagesLoaded === totalImages){
        ready = true;
        loader.hidden = true;
        console.log('ready =', ready);
    }
}

// create elements and display them to the DOM
function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArray.length;
    console.log('total images', totalImages)
    // run function for each photo in array
    photosArray.forEach((photo) => {
        // create <a> to link to unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // create img
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description)
        // event listener to check when each is loaded
        img.addEventListener('load', imageLoaded);
        // put <img> inside <a> then put both inside container
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get photos from unsplash
async function getPhotos(){
    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {

        // catch error here
    }
}

// check to see if scrolling near bottom of page
window.addEventListener('scroll', () =>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
        ready = false;
        getPhotos();
    }
});

// On load
getPhotos();