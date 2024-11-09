const header = documentSelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.screenY > 150);
});
