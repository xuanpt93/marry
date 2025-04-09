function showThankYou() {
    const thankYouMessage = document.getElementById('thank-you-message');
    thankYouMessage.style.display = 'block';
    thankYouMessage.style.animation = 'fadeIn 1s ease-out';
}



    // Hàm bật nhạc và thay đổi icon khi nhấn nút
    function playPause() {
        let audio = document.getElementById("backgroundMusic");
        let musicIcon = document.getElementById("musicIcon");
        let button = document.getElementById("toggleMusic");

        if (audio.paused) {
            let playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log("Nhạc đang phát...");
                    button.textContent = " Tạm dừng";
                    button.prepend(musicIcon);
                    musicIcon.className = "fas fa-volume-mute icon";
                    musicIcon.setAttribute('data-tooltip', 'Tạm dừng nhạc'); // Cập nhật tooltip
                }).catch(error => {
                    console.log("Không thể phát nhạc: ", error);
                });
            }
        } else {
            audio.pause();
            console.log("Nhạc đã tạm dừng.");
            button.textContent = " Phát nhạc";
            button.prepend(musicIcon);
            musicIcon.className = "fas fa-volume-up icon";
            musicIcon.setAttribute('data-tooltip', 'Phát nhạc'); // Cập nhật tooltip
        }
    }