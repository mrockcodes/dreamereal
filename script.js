const scrollContainer = document.querySelector("html");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft -= evt.deltaY;
});
