// var jsonData = {
//   "logo" : "src/img/logo.svg",
//   "az" : "Nous sommes les conditions"
// }

// function populateContent(img)

// { 
// photo = document.getElementById("#logo");
// //document.getElementById("imageid").src="../images/audir8.png";
// photo.src = img.logo;
// az = document.getElementById("#az");
// az.innerHTML = "<b>Top Speed: </b>"+img.az;
// }

// populateContent(jsonData);

document.querySelector("#button").onclick = function() {
  if (window.getComputedStyle(document.querySelector('#conditions')).display=='none'){
  document.querySelector("#conditions").style.display="block";
  document.querySelector("#form").style.display="none";
  document.querySelector("#warranty").style.display="none";
  } else {
  document.querySelector("#conditions").style.display="none";
  document.querySelector("#form").style.display="flex";
  document.querySelector("#warranty").style.display="flex";
  }
}

document.querySelector("#button2").onclick = function() {
  if (window.getComputedStyle(document.querySelector('#conditions')).display=='none'){
  document.querySelector("#conditions").style.display="block";
  document.querySelector("#form").style.display="none";
  document.querySelector("#warranty").style.display="none";
  } else {
  document.querySelector("#conditions").style.display="none";
  document.querySelector("#form").style.display="flex";
  document.querySelector("#warranty").style.display="flex";
  }
}

var $ = require('jquery');
require('parsleyjs');

$(document).ready(function() {
  $("#form").on('submit', function(e) {
     e.preventDefault();
     $(".validation").addClass("visible");
     $(".main").removeClass("visible").addClass("hidden");
  });
});

$("#carousel-3").on("mouseover", function() {
  $("#visible-text").addClass("aftertitle__black").removeClass("aftertitle");
  $("#visible-title").addClass("title__black").removeClass("title");
});

$("#carousel-1, #carousel-2, #carousel-4").on("mouseover", function() {
  $("#visible-text").addClass("aftertitle").removeClass("aftertitle__black");
  $("#visible-title").addClass("title").removeClass("title__black");
});

// -----------------------------------


// https://codepen.io/desandro/pen/dpPzab
// https://github.com/metafizzy/flickity/issues/104
// https://developer.mozilla.org/fr/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs
// https://stackoverflow.com/questions/49406021/displaying-an-image-on-html-with-a-json-file
// HTMLMediaElement.duration
// Evenement propagation

// -----------------------------------

// document.querySelector("#button3").onclick = function() {
//   if (window.getComputedStyle(document.querySelector('#validation')).display=='none'){
//   document.querySelector("#validation").style.display="grid",
//   document.querySelector("#validation").style.transition="1s",
//   document.querySelector("#main").style.display="none";
//   } else {
//   document.querySelector("#validation").style.display="none";
//   }
// }

// $(function () {
//   $('#form').parsley().on('field:validated', function() {
//     var ok = $('.parsley-error').length === 0;
//     $('.bs-callout-info').toggleClass('hidden', !ok);
//     $('.bs-callout-warning').toggleClass('hidden', ok);
//   })
// });

// let vh = window.innerHeight * 0.01;
// // Then we set the value in the --vh custom property to the root of the document
// document.documentElement.style.setProperty('--vh', `${vh}px`);

// document.getElementById('carousel-arrow-next').addEventListener('click',carouselSwipe,false);
// document.getElementById('carousel-arrow-prev').addEventListener('click',carouselSwipe,false);


// function carouselSwipe() {
//     var currentImg = document.getElementsByClassName('carousel-img-displayed')[0].id.substring(9);
// 	var newImg = parseInt(currentImg);
// 	if (this.id == 'carousel-arrow-next') {
//         newImg++;
//         if (newImg >= document.getElementsByClassName('carousel-img').length) {
//             newImg = 0;
//         }
// 	} else if (this.id == 'carousel-arrow-prev') {
//         newImg--;
//         if (newImg<0) {
//             newImg = document.getElementsByClassName('carousel-img').length-1;
//         }
//     }
//     document.getElementById('carousel-'+currentImg).className = 'carousel-img carousel-img-hidden';
//     var displayedCarousel = document.getElementById('carousel-'+newImg);
// 	displayedCarousel.className = 'carousel-img carousel-img-hidden';
// 	setTimeout(function() {
// 		displayedCarousel.className = 'carousel-img carousel-img-displayed';
// 	},20);
// 	setTimeout(function() {
// 		document.getElementById('carousel-'+currentImg).className = 'carousel-img carousel-img-noDisplay';
// 	},520);
// }

// $("#carousel-4").on("mouseover", function() {
//   $("#visible-text, #visible-offer, #visible-title").hide();
// });

// $("#carousel-1, #carousel-2, #carousel-3").on("mouseover", function() {
//   $("#visible-text, #visible-offer, #visible-title").show();
// });


// if($("#carousel-3").hasClass("is-selected") ) {
//   console.log("toto");
//   $("#visible-text").addClass("aftertitle__black").removeClass("aftertitle");
//   $("#visible-title").addClass("title__black").removeClass("title");
// };

// if($("#carousel-1, #carousel-2, #carousel-4").hasClass("carousel-cell") ) {
//   $("#visible-text").addClass("aftertitle").removeClass("aftertitle__black");
//   $("#visible-title").addClass("title").removeClass("title__black");
// };

// if ($('#start').hasClass("is-selected")) {
//   $(".main").removeClass("visible").addClass("hidden");
// }

// $("input[name=civilite][value='']").attr('checked', true); 

// var parsleyOptions = {
//   errorClass: "error",
//   successClass: "valid",
//   errorsMessagesDisabled: !0,
//   classHandler: function(t) {
//       return t.$element.closest("fieldset")
//   }
// };

// $('#form').parsley();

// var instance = $('#first').parsley();
// console.log(instance.isValid()); // maxlength is 42, so field is valid
// $('#first').attr('data-parsley-maxlength', 4);
// console.log(instance.isValid());

// $(function () {
//   $('#form').parsley().on('field:validated', function() {
//       require('jquery-validation');
//       var ok = $('.parsley-error').length === 0;
//       console.log(ok);
//       $('.main').addClass('hidden', !ok);
//       $('validation').toggleClass('hidden', ok);
//     })
//     .on('.form:submit', function() {
//       return true;
//   });
// });