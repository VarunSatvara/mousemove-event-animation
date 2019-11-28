window.addEventListener("mousemove", animate);

function animate(event) {
    var x = event.clientX;
    var y = event.clientY;

    var randomNum, randomColor, size, el;

    randomColor = "#" + Math.random().toString(16).slice(-6);

    // randomColor = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
    size = Math.random() * 50;
    randomNum = Math.random() * 70;

    el = document.createElement("div");
    document.body.appendChild(el);

    el.setAttribute("style", "position:absolute;background:" + randomColor + ";width:" + size + "px;height:" + size + "px;left:" + x + "px;top:" + y + "px;border-radius:" + Math.random() * 100 + "%;transform:rotate(" + Math.random() * 180 + "deg)translate(" + randomNum + "px)");

    if (document.getElementById("load").children) {
        var frames, framecount, i, interval;

        frames = document.getElementById("load").children;
        framecount = farmes.length;

        i = 0;
        interval = setInterval(function() {
            if (framecount > 50) {
                document.getElementById("load").removeChild(frames[i]);
                clearInterval(interval);

                for (i = 9; i >= 0; i--) {
                    frames[i].style.opacity = (i / 0.9) - i;
                    frames[i].style.opacity = (frames[i].style.opacity).substr(0, 3);
                }
            }

        })
    }
};