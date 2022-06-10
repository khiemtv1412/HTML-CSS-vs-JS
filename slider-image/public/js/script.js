let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    current = 0;



// clear all images

function reset(){
    for (let i = 0; i < sliderImages.length; i++){
        sliderImages[i].getElementsByClassName.display = "none";
    }
}

// inital slide

function startSlide(){
    reset();
    sliderImages[0].style.display = "block";
}

// show previous

function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;

}

function slideRight(){
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;

}


// Right arrow click

arrowRight.addEventListener("click", function (){
    if(current === sliderImages.length - 1){
        current = -1;
    }
    slideRight();
});

startSlide();

