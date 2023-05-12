var index = 0;
showSlides(index);

function moveFunction(n) {
    showSlides(index += n);
}

function showSlides(n) {
    var i;
    var items = document.getElementsByClassName("slide");
    if (n > items.length) {index = 1}
    if (n < 1) {index = items.length}
    for (i = 0 ; i < items.length ; i++) {
        items[i].style.display = "none";
    }
    items[index-1].style.display = "block"
}
