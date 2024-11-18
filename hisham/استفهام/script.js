const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');
const progressBar = document.getElementById('progressBar');
const progressFilled = document.getElementById('progressFilled');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const speedSelector = document.getElementById('speedSelector');
const rewindBtn = document.getElementById('rewindBtn');
const forwardBtn = document.getElementById('forwardBtn');
const examButton = document.getElementById('examButton');
const telegramButton = document.getElementById('telegramButton');

// تشغيل/إيقاف الفيديو
playPauseBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    video.pause();
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
});

// كتم/إلغاء كتم الصوت
muteBtn.addEventListener('click', () => {
  if (video.muted) {
    video.muted = false;
    muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    video.muted = true;
    muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
});

// تحديث شريط التقدم حسب الوقت الحالي للفيديو
video.addEventListener('timeupdate', () => {
  const progressPercent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = progressPercent + '%';
});

// عند الضغط على الشريط للتقديم أو التأخير
progressBar.addEventListener('click', (e) => {
  const clickPosition = e.offsetX;
  const progressWidth = progressBar.offsetWidth;
  const newTime = (clickPosition / progressWidth) * video.duration;
  video.currentTime = newTime;
});


// التقديم أو التأخير
rewindBtn.addEventListener('click', () => {
  video.currentTime -= 10; // العودة 10 ثواني
});
forwardBtn.addEventListener('click', () => {
  video.currentTime += 10; // التقديم 10 ثواني
});

// زر ملء الشاشة
fullscreenBtn.addEventListener('click', () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
});

// تغيير سرعة الفيديو
speedSelector.addEventListener('change', () => {
  video.playbackRate = speedSelector.value;
});



// زر الدخول إلى قناة التليجرام
telegramButton.addEventListener('click', () => {
  window.open('https://t.me/kokydwz2', '_blank');
});
