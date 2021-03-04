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