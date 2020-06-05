// var body = document.querySelector('body')
var menu_toggle = document.getElementsByClassName('menu-toggle')
var hamburger = document.querySelector(".hamburger");

menu_toggle[0].addEventListener("click", function(){
	body.classList.toggle('menu-open')
	hamburger.classList.toggle("is-active");
})

var sticky = new Sticky('nav');



var getDivs = []

function matchHeight(classname){
   getDivs = document.getElementsByClassName(classname);
  var arrayLength = getDivs.length;
  var heights = [];

  for (var i = 0; i < arrayLength; i++) {
      heights.push(getDivs[i].offsetHeight);
  }

  function getHighest() {
    return Math.max.apply(Math, heights);
  }

  var tallest = getHighest();

  for (var i = 0; i < getDivs.length; i++) {
      getDivs[i].style.height = tallest + "px";
  }
}

// matchHeight('card-research')
matchHeight('carousel-card')

