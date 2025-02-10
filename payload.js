document.body.innerHTML = '';
document.body.style.backgroundColor = 'black';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';
document.body.style.overflow = 'hidden';

document.addEventListener("DOMContentLoaded", function() {
    let video = document.createElement('video');
    video.src = 'video.mp4'; // استبدل باسم ملف الفيديو الخاص بك
    video.autoplay = true;
    video.loop = true;
    video.controls = false;
    video.style.maxWidth = '100%';
    video.style.maxHeight = '100%';
    
    document.body.appendChild(video);
});
