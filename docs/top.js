const images = [
    document.getElementById("memory"),
    document.getElementById("qrshare")
];

images.forEach(image =>
    image.addEventListener('mouseleave', () => {
        image.classList.remove('hover')
    }), false);