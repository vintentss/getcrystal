document.addEventListener("DOMContentLoaded", function() {
    let progress = 0;
    const progressBar = document.getElementById('loading-progress');
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');

    function simulateLoading() {
        if (progress >= 100) {
            clearInterval(loadingInterval);
            loadingScreen.style.display = 'none';
            content.style.display = 'block';
        } else {
            progress += 1;
            progressBar.style.width = progress + '%';
        }
    }

    const loadingInterval = setInterval(simulateLoading, 50);
});
