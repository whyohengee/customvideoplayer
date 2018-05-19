const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const playButton = player.querySelector('.player__button.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const sliders = player.querySelectorAll('input[type="range"]');
const progressFilled = player.querySelector('.progress__filled');
const progress = player.querySelector('.progress');
const fullScreenButton = player.querySelector('.fullscreen')
const ua = window.navigator.userAgent;

/* Toggle play button */
function togglePlay(e) {
  if (video.paused) {
    video.play();
  }
  else {
    video.pause();
  }
}

//Change play button icon between play and pause
function toggleIcon(){
  const icon = this.paused ? '►' : '❚ ❚';
  playButton.innerText = icon;
}

//When skip buttons are clicked
function skip() {
  console.log(this.dataset);
  video.currentTime += parseFloat(this.dataset.skip);
}

//When sliders are moved
function handleSliderUpdate(){
  video[this.name] = this.value;
}

//Progress bar filling
function handleProgress() {
  const progress = (video.currentTime / video.duration) * 100; //gives us what percentage to set flex-basis
  progressFilled.style.flexBasis = `${progress}%`;
}

//Scrub through video
function scrub(e) {
  let scrubPercent = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubPercent;
}

//Toggle fullscreen
function toggleFullScreen() {
  if (ua.includes('Chrome') || ua.includes('Safari')) {
    video.webkitRequestFullScreen();
  };
  if (ua.includes('Firefox')) {
    video.mozRequestFullScreen();
  }
}



let mousedown = false;

video.addEventListener('click', togglePlay);
playButton.addEventListener('click', togglePlay);
video.addEventListener('play', toggleIcon);
video.addEventListener('pause', toggleIcon);
skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));
sliders.forEach(slider => slider.addEventListener('change', handleSliderUpdate));
video.addEventListener('timeupdate', handleProgress);
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => {mousedown && scrub(e)});
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)
fullScreenButton.addEventListener('click', toggleFullScreen);