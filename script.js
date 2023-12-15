// #2 GLOBAL VARAIBLES - Rin
var imgPawSize = vhToPixels(10);


// #1 Overmargin Paw Fix - Rin
function vhToPixels(vh) {
    return Math.round(window.innerHeight / (100 / vh));
}
function vwToPixels(vw) {
    return Math.round(window.innerWidth / (100 / vw));
}

function getRandomRotation() {
    return Math.floor(Math.random() * 361) + 'deg';
}

function getRandomPastelColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createRandomPaw(event) {
    const fill = getRandomPastelColor();
    const svgCode = `
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 46.01 43.96">
            <defs>
                <style>
                    .cls-1 {
                        fill: ${fill};
                    }
                </style>
            </defs>
            <path class="cls-1" d="m21.41,19.01c-3.58.88-9.17,5.18-11.9,11.25-2.72,6.08-2.12,12.17,1.12,13.47,3.24,1.3,8.9-3.37,12.6-2.82,3.7.55,8.45,4.09,12.9,2.52,4.45-1.58,1.21-13.48-2.12-18.28-3.33-4.81-6.94-7.53-12.61-6.14Z"/>
            <path class="cls-1" d="m44.69,14.02c-1.88-1.58-5.09-.59-7.17,2.2s-2.24,6.32-.36,7.9c1.88,1.58,5.09.62,7.17-2.17,2.08-2.79,2.24-6.36.35-7.94Z"/>
            <path class="cls-1" d="m17.4,16.56c3.05-.88,4.54-5.21,3.17-9.64C19.24,2.47,15.73-.38,12.73.53c-3.01.91-4.37,5.21-3.05,9.61,1.37,4.39,4.69,7.29,7.73,6.42Z"/>
            <path class="cls-1" d="m8.45,16.51c-2.1-2.71-5.46-3.57-7.24-2-1.77,1.57-1.61,5.03.53,7.72,2.12,2.69,5.35,3.61,7.2,2.04,1.85-1.57,1.63-5.06-.5-7.76Z"/>
            <path class="cls-1" d="m36.03,9.72c.91-4.52-.86-8.83-3.94-9.6-3.08-.77-6.32,2.27-7.24,6.76-.86,4.48.73,8.77,3.77,9.58,3.04.81,6.4-2.2,7.41-6.74Z"/>
        </svg>`;

    const img = new Image();
    img.src = `data:image/svg+xml;base64,${btoa(svgCode)}`;
    img.alt = 'Random Paw';

    // img.style.width = '100px';
    img.style.width = imgPawSize + 'px';
    // Implement of fix #1
    img.style.left = imgStyleLeft();
    img.style.top = imgStyleTop();

    img.className = "paw";
    // Implement of fix #2

    img.style.transform = 'rotate(' + getRandomRotation() + ')';
    img.style.zIndex = -1;

    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
    var logoElement = document.getElementById("logo-render")


    if (elementUnderMouse === logoElement) {
        img.className += " pawBlurred";
    }

    document.body.appendChild(img);
    /* Removing the paw after 6 seconds */
    setTimeout(() => {
        document.body.removeChild(img);
    }, 6000);
}

document.body.addEventListener('click', createRandomPaw);

function imgStyleTop() {
    if (event.clientY + 20 > vhToPixels(100) - 110) {
        return (vhToPixels(100) - 125) + 'px';
    }
    else { return event.clientY - (imgPawSize / 2) + 'px'; }
}
function imgStyleLeft() {
    if (event.clientX + 20 > vwToPixels(100) - 110) {
        return (vwToPixels(100) - 125) + 'px';
    }
    else { return event.clientX - (imgPawSize / 2) + 'px' }
}
