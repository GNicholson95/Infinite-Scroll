// Unsplash API
const count = 10;
const apiKey ='lqAjiBv4OmYA2JF-56kxqb29zfqh9wAJ3Woesu0ne-Q';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Get photos from unsplash

async function getPhotos(){
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        // catch error here
    }
}

// On load
getPhotos();