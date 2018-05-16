
function moveToC(){
    var viewportWidth = window.innerWidth;
    if (viewportWidth < 1000) {
        $('.toc').appendTo($('.toc-sidebar'));
    } else {
        $('.ui.sidebar').sidebar('hide');
        $('.toc').appendTo($('.toc-wrapper'));
    }
}

function moveSearch(){
    var viewportWidth = window.innerWidth;
    if (viewportWidth < 1000) {
        $('.search.docs').appendTo($('.mobile-search'));
    } else {
        $('.ui.sidebar').sidebar('hide');
        $('.search.docs').appendTo($('.toc-wrapper'));
    }
}

window.onresize = function () {
    moveSearch()
    moveToC();
}

moveSearch()
moveToC();


var burger = document.querySelector(".burger");

var sidebar = document.querySelector(".sidebar")

burger.addEventListener('click', function (){
    $('.ui.sidebar').sidebar('toggle');
});

sidebar.addEventListener('click', function () {
    if (event.target.tagName.toLowerCase() === 'a') {
        $('.ui.sidebar').sidebar('hide');
    }
});
