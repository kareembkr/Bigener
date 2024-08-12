let bodyEl = document.querySelector("body");
bodyEl.addEventListener("mousemove", (event) => {

    let xPos = event.offsetX;
    let yPos = event.offsetY;
    let spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "py";
    let size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 3000);

});
