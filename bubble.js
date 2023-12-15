//Bubble Script, heavily modified by Snappy Pupper

var mybubbles = document.getElementsByClassName("ani-bubble");

var bubblecolors = ["#5750a1", "#f89e1b", "#75CFE0"];

for (var i = 0; i < mybubbles.length; i++) {
  mybubbles[i].style.backgroundColor = bubblecolors[Math.floor(Math.random() * bubblecolors.length)];
  mybubbles[i].style.opacity = Math.random() * 0.75;

  var bubblesize = (Math.floor(Math.random() * 7) + 2) * 10;

  mybubbles[i].style.width = bubblesize + "px";
  mybubbles[i].style.height = bubblesize + "px";
  mybubbles[i].style.borderRadius = bubblesize / 2 + "px";

  mybubbles[i].style.left = Math.floor(Math.random() * 100) + "%";

  var animationDuration = Math.floor(Math.random() * 32) + 8;
  mybubbles[i].style.animationDuration = animationDuration + "s";

  var animationDelay = Math.floor(Math.random() * 8) + i * (animationDuration / mybubbles.length) + "s";
  mybubbles[i].style.animationDelay = animationDelay;

  mybubbles[i].style.transform = "rotate(" + (Math.random() * 360) + "deg)";
  mybubbles[i].style.animationTimingFunction = "ease-in-out";
  mybubbles[i].style.animationIterationCount = "infinite";
}

document.addEventListener("mousemove", function (e) {
  var mouseX = e.clientX / window.innerWidth;
  var mouseY = e.clientY / window.innerHeight;

  Array.from(mybubbles).forEach(function (bubble) {
    var bubbleOffset = bubble.getAttribute("data-offset");
    var parallaxAmount = parseFloat(bubble.getAttribute("data-parallax"));

    if (!bubbleOffset) {
      bubbleOffset = 0;
    }
    if (!parallaxAmount) {
      parallaxAmount = 1;
    }

    var xOffset = ((mouseX - 0.5) * parallaxAmount * bubbleOffset).toFixed(2) + "px";
    var yOffset = ((mouseY - 0.5) * parallaxAmount * bubbleOffset).toFixed(2) + "px";

    bubble.style.transform = "translate(" + xOffset + ", " + yOffset + ")";
  });
});

setInterval(function () {
  Array.from(mybubbles).forEach(function (bubble) {
    if (isOffscreen(bubble)) {
      var bubbleoffset = Math.floor(Math.random() * 140) - 19;
      bubble.style.left = bubbleoffset + '%';
    }
  });
}, 50);

function isOffscreen(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.right < 0 ||
    rect.left > window.innerWidth ||
    rect.bottom < 0 ||
    rect.top > window.innerHeight
  );
}

