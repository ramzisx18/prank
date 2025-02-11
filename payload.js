document.body.innerHTML = '';
document.body.style.backgroundColor = 'black';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';
document.body.style.overflow = 'hidden';

document.addEventListener("DOMContentLoaded", function() {
    let iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/mUb4iwrcq8U?autoplay=1&loop=1&playlist=mUb4iwrcq8U';
    iframe.allow = 'autoplay';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    
    document.body.appendChild(iframe);
});
