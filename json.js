$(document).ready(function(){
  var urldata = [
    {
      "URL_logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/1200px-Hyundai_Motor_Company_logo.svg.png",
      "URL_sliderOne":"/slide_1.0425d088.jpg",
      "URL_sliderTwo":"/slide_2.8c3cc361.jpg",
      "URL_sliderThree":"/slide_3.49237cc1.jpg",
      "URL_video":"/tucson.8c2c0d78.mp4",
      "URL_offer":"/offre.0e78da5a.svg",
      "URL_offer_mobile":"/offerbis.508314c1.svg",
      "URL_warranty":"/garantie.be35aa77.svg"
    }
  ];

  $.each(urldata, function (index, value) {           
    document.getElementById("logo").src = value.URL_logo;
    document.getElementById("carousel-1").style.backgroundImage = "url("+this.URL_sliderOne+")";
    document.getElementById("carousel-2").style.backgroundImage = "url("+this.URL_sliderTwo+")";
    document.getElementById("carousel-3").style.backgroundImage = "url("+this.URL_sliderThree+")";
    document.getElementById("video").src = value.URL_video;
    document.getElementById("offer").src = value.URL_offer;
    document.getElementById("offer-mobile").src = value.URL_offer_mobile;
    document.getElementById("warranty-img").src = value.URL_warranty;
  });
});

