const manifestUriHistory = "https://www.prysmnet.com/stream/live/HistoryTV18HD/master.m3u8";
const manifestUricolors = "https://www.prysmnet.com/stream/live/ColorsInfinityHD/master.m3u8";


// const manifestUri = 'https://www.prysmnet.com/stream/live/Demofeed/master.m3u8';
// "https://storage.googleapis.com/shaka-asset-icons/dark_truth.webp";

// const manifestUridemo =
//     'http://103.69.226.253:8080/live/Demo/master.m3u8';

function initApp() {
    // Install built-in polyfills to patch browser incompatibilities.
    shaka.polyfill.installAll();

    // Check to see if the browser supports the basic APIs Shaka needs.
    if (shaka.Player.isBrowserSupported()) {
        // Everything looks good!
        initPlayer();
    } else {
        // This browser does not have the minimum set of APIs we need.
        console.error('Browser not supported!');
    }
}

async function initPlayer() {
    // // Create a Player instance.
    // const video = document.getElementById('video1');
    // const videoVH1 = document.getElementById('videoVH1');
    // const videoMTV = document.getElementById('video2');
    // const videoMTVbeats = document.getElementById('video3');
    const videoHistory = document.getElementById('video4');
    const videoColors = document.getElementById('video5');


    // const player = new shaka.Player(video);
    // const playerVH1 = new shaka.Player(videoVH1);
    // const playerMTV = new shaka.Player(videoMTV);
    // const playerMTVbeats = new shaka.Player(videoMTVbeats);
    const playerHistory = new shaka.Player(videoHistory);
    const playerColors = new shaka.Player(videoColors);

    // Attach player to the window to make it easy to access in the JS console.
    // window.player = player;
    // window.player = playerVH1;
    // window.player = playerMTV;
    // window.player = playerMTVbeats;
    window.player = playerHistory;
    window.player = playerColors;

    // Listen for error events.
    // player.addEventListener('error', onErrorEvent);
    // playerVH1.addEventListener('error', onErrorEvent);
    // playerMTV.addEventListener('error', onErrorEvent);
    // playerMTVbeats.addEventListener('error', onErrorEvent);
    playerHistory.addEventListener('error', onErrorEvent);
    playerColors.addEventListener('error', onErrorEvent);

    // Try to load a manifest.
    // This is an asynchronous process.
    // try {
    //     await player.load(manifestUri);
    //     // This runs if the asynchronous load is successful.
    //     console.log('The video has now been loaded!');
    // } catch (e) {
    //     // onError is executed if the asynchronous load fails.
    //     onError(e);
    // }
    // try {
    //     await playerVH1.load(manifestUri);
    //     // This runs if the asynchronous load is successful.
    //     console.log('The video has now been loaded!');
    // } catch (e) {
    //     // onError is executed if the asynchronous load fails.
    //     onError(e);
    // }
    // // playerdemo.addEventListener('error', onErrorEvent);
    // try {
    //     await playerMTV.load(manifestUriMTV);
    //     // This runs if the asynchronous load is successful.
    //     console.log('The video has now been loaded!');
    // } catch (e) {
    //     // onError is executed if the asynchronous load fails.
    //     onError(e);
    // }
    // try {
    //     await playerMTVbeats.load(manifestUriMTVbeats);
    //     // This runs if the asynchronous load is successful.
    //     console.log('The video has now been loaded!');
    // } catch (e) {
    //     // onError is executed if the asynchronous load fails.
    //     onError(e);
    // }
    try {
        await playerHistory.load(manifestUriHistory);
        // This runs if the asynchronous load is successful.
        console.log('The video has now been loaded!');
    } catch (e) {
        // onError is executed if the asynchronous load fails.
        onError(e);
    }
    try {
        await playerColors.load(manifestUricolors);
        // This runs if the asynchronous load is successful.
        console.log('The video has now been loaded!');
    } catch (e) {
        // onError is executed if the asynchronous load fails.
        onError(e);
    }
}

function onErrorEvent(event) {
    // Extract the shaka.util.Error object from the event.
    onError(event.detail);
}

function onError(error) {
    // Log the error.
    console.error('Error code', error.code, 'object', error);
}

document.addEventListener('DOMContentLoaded', initApp);


var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    var vid = [

        window.document.getElementById("video4"),
        window.document.getElementById("video5")
    ]
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        vid[i].pause();
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = vid[slideIndex - 1].play();
}