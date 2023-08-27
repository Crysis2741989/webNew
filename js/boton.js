
document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){
    var currentScroll = document.documentElement.scrollTop;
    if(currentScroll > 0){
        window.scrollTo (0, 0);
    }
}

buttonUp = document.getElementById("button-up");

window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;

    if(scroll>80){
        buttonUp.style.transform = "scale(1)"
    }else {
        buttonUp.style.transform = "scale(0)"
    }
}