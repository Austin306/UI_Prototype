// var slideIndex = 0;
// showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    var prevs = document.getElementsByClassName("prev");
    var next = document.getElementsByClassName("next");
    prevs[0].style.display = "block";
    next[0].style.display = "block";
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    console.log(slides);
    var dots = document.getElementsByClassName("dot");
    console.log(dots);
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    console.log(dots);

}

function pageShift(pageName){
    location.href = "/"+pageName+".html";   
}


function collectInfo(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var feedBack = document.getElementById("feedBack").value;
    console.log(firstName);
    console.log(lastName);
    console.log(feedBack)
}