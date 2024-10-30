const videos = document.querySelectorAll('video');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.play();
    } else {
      entry.target.pause();
    }
  });
}, { threshold: 0.5 });

videos.forEach(video => observer.observe(video));
function toggleMute(button) {
  const video = button.closest('.reel-video').querySelector('video');
  video.muted = !video.muted;
  button.textContent = video.muted ? '🔇 Unmute' :'🔈 mute' ;
}