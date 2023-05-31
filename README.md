# Infinite-Scroll
.Variables are set up to track the loading state and the number of loaded images.

.The imageLoaded function increments the loaded image counter and checks if all images have been loaded.

.The displayPhotos function creates HTML elements for each fetched photo and appends them to the webpage.

.The getPhotos function fetches photos from the Unsplash API and calls displayPhotos to render them.

.A scroll event listener triggers when the user nears the bottom of the page. It fetches more photos if ready to load.

.Initially, the getPhotos function is called to fetch the first set of photos.
In summary, this JavaScript code implements infinite scrolling by fetching and displaying images from the Unsplash API as the user scrolls, creating a seamless browsing experience.
