
const vh1 = 'http://tv.easyfi.net.in/stream/live/hls_vh1/playlist.m3u8';
const cnbc = "http://tv.easyfi.net.in/stream/live/hls_cnbc/playlist.m3u8";
const cc = "http://tv.easyfi.net.in/stream/live/hls_cc/playlist.m3u8";
const history = "http://tv.easyfi.net.in/stream/live/hls_historytv/playlist.m3u8";

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
    const videoVh1 = document.getElementById('vh1');
    const videoCnbc = document.getElementById('cnbc');
    const videoCc = document.getElementById('cc');
    const videoHistory = document.getElementById('history');

    const playerVh1 = new shaka.Player(videoVh1);
    const playerCnbc = new shaka.Player(videoCnbc);
    const playerCc = new shaka.Player(videoCc);
    const playerHistory = new shaka.Player(videoHistory);


    // Attach player to the window to make it easy to access in the JS console.
    window.player = playerCnbc;
    window.player = playerVh1;
    window.player = playerHistory;
    window.player = playerCc;

    // Listen for error events.
    playerVh1.addEventListener('error', onErrorEvent);
    playerCnbc.addEventListener('error', onErrorEvent);
    playerHistory.addEventListener('error', onErrorEvent);
    playerCc.addEventListener('error', onErrorEvent);

    try {
        await playerVh1.load(vh1);
        // This runs if the asynchronous load is successful.
        console.log('The video has now been loaded!');
    } catch (e) {
        // onError is executed if the asynchronous load fails.
        onError(e);
    }
    try {
        await playerCnbc.load(cnbc);
        // This runs if the asynchronous load is successful.
        console.log('The video has now been loaded!');
    } catch (e) {
        // onError is executed if the asynchronous load fails.
        onError(e);
    }
    try {
        await playerCc.load(cc);
        // This runs if the asynchronous load is successful.
        console.log('The video has now been loaded!');
    } catch (e) {
        // onError is executed if the asynchronous load fails.
        onError(e);
    }
    try {
        await playerHistory.load(history);
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