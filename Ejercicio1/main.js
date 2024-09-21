const element = document.getElementById("tester");
let start;
let offset = 0;

function move(timeStamp) {
    if (start === undefined) {
        start = timeStamp;
    }

    const elapsed = timeStamp - start;
    offset = Math.min(0.1 * elapsed, 500); // Asegura que el elemento se detenga a los 500px
    element.style.transform = `translateX(${offset}px)`;
  
    // Detenemos el movimiento cuando se alcanza el límite
    if (offset < 500) {
        requestAnimationFrame(move);
    }
}

requestAnimationFrame(move);
