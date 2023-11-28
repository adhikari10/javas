document.addEventListener('DOMContentLoaded', function () {
    const triggerElement = document.getElementById('trigger');
    let targetImage = document.getElementById('target');

    const originalImageSrc = 'img/picA.jpg';

    const alternativeImageSrc = 'img/picB.jpg';

    triggerElement.addEventListener('mouseover', function () {
        targetImage.src = alternativeImageSrc;
    });

    triggerElement.addEventListener('mouseout', function () {
        // Change the image source back to original when mouseout
        targetImage.src = originalImageSrc;
    });
});