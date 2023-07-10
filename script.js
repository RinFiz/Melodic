const buttonContainers = document.querySelectorAll('.button-container');

        buttonContainers.forEach(container => {
            const playPauseButton = container.querySelector('.play-pause');
            let audio;

            if (container.classList.contains('rain')) {
                audio = new Audio('https://drive.google.com/uc?export=download&id=1tXQetbBiC9VSzHhhqhr1ZVNpWiCsvCX-');
            } else if (container.classList.contains('ocean')) {
                audio = new Audio('https://drive.google.com/uc?export=download&id=15s4a_I2zjoCWsdzQM-F6Ykq68AWev-iE');
            } else if (container.classList.contains('thunder')) {
                audio = new Audio('https://drive.google.com/uc?export=download&id=1vcbE6jamX_oExN0L7vqHLra5eI9zqftR');
            } else if (container.classList.contains('campfire')) {
                audio = new Audio('https://drive.google.com/uc?export=download&id=1oYFoBxDiG7_v39TRCV_-va2L2eJQmGbI');
            }

            let isPlaying = false;

            container.addEventListener('click', () => {
                if (isPlaying) {
                    container.classList.remove('playing');
                    container.classList.add('paused');
                    playPauseButton.style.backgroundImage = "url('https://www.transparentpng.com/thumb/play-button/MF743g-play-button-amazing-image-download.png')";
                    audio.pause();
                    isPlaying = false;
                } else {
                    container.classList.remove('paused');
                    container.classList.add('playing');
                    playPauseButton.style.backgroundImage = "url('https://icons.veryicon.com/png/o/object/material-design-icons/pause-37.png')";
                    audio.play();
                    isPlaying = true;
                }
            });
        });
