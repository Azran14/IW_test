$(document).ready(function(){
  tucson = [
    {
      "URL_title":"Nouveau Hyundai TUCSON",
      "URL_aftertitle":"Se satisfaire du maximum",
      "sliderOne": {
        "URL_slider":"https://nsm09.casimages.com/img/2021/03/03//21030305224425871417294155.jpg",
        "URL_text":"",
      },
      "sliderTwo": {
        "URL_slider":"https://nsm09.casimages.com/img/2021/03/03//21030305224425871417294154.jpg",
        "URL_text":"Nouvel habitacle spacieux.",
      },
      "sliderThree": {
        "URL_slider":"https://nsm09.casimages.com/img/2021/03/03//21030305224525871417294156.jpg",
        "URL_text":"Nouvelles motorisations. <br> Existe en version hybride",
      },
      "URL_video":"https://v1.casimages.com/v/2021/03/03//tt4rLb-tucson.mp4",
      "URL_offer":"/offre.0e78da5a.svg",
      "URL_offer_mobile":"/offerbis.508314c1.svg",
      "URL_logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/1200px-Hyundai_Motor_Company_logo.svg.png",
      "URL_warranty":"/garantie.be35aa77.svg",
      "URL_conditions":"<br> TUCSON : (1) Exemple pour un Hyundai TUCSON Nouvelle G&eacute;n&eacute;ration 1.6 T-GDI 150 iBVM hybrid 48V Intuitive neuf en Location Longue Dur&eacute;e sur 49 mois / 40 000 km, (2) <strong>SANS APPORT</strong>, 49 loyers de <strong>360&euro;</strong> et le Pack SANS ENGAGEMENT inclus(3). <strong><u>Mod&egrave;le pr&eacute;sent&eacute;</u></strong>&nbsp;: Hyundai TUCSON Nouvelle G&eacute;n&eacute;ration 1.6 T-GDI 150 DCT-7 hybrid 48V Executive avec peinture m&eacute;tallis&eacute;e : LLD sur 49 mois / 40 000 km, (2) <strong>SANS APPORT</strong>, 49 loyers de <strong>585&euro;</strong> et le Pack SANS ENGAGEMENT inclus<sup>(3)</sup>. (3) Possibilit&eacute; de r&eacute;silier &agrave; tout moment &agrave; partir du 7&egrave;me mois et 6 000 km minimum parcourus avec le Pack SANS ENGAGEMENT, avec paiement de frais de remise &agrave; l'&eacute;tat standard et du kilom&eacute;trage exc&eacute;dentaire &eacute;ventuel (prorata temporis du kilom&eacute;trage contractuel). Offre r&eacute;serv&eacute;e aux particuliers et limit&eacute;e aux 300 premiers contrats souscrits en Location Longue Dur&eacute;e, valable du <strong><u>01/02/2021 au 28/02/2021</u></strong> dans le r&eacute;seau participant, <u>dans la limite des stocks disponibles</u>, si acceptation par Arval Service Lease, RCS Paris 352 256 424 . Hyundai Leasing est la marque sous laquelle Hyundai distribue les produits de Arval Service Lease. <br>"
    }
  ];
  kona = [
    {
      "URL_title":"Hyundai KONA Hybrid",
      "URL_aftertitle":"En rupture de stock",
      "sliderOne": {
        "URL_slider":"https://nsm09.casimages.com/img/2021/03/04//21030410333825871417295116.jpg",
        "URL_text":"kona > bretagne.",
      },
      "sliderTwo": {
        "URL_slider":"https://nsm09.casimages.com/img/2021/03/04//21030410333925871417295117.jpg",
        "URL_text":"achete kona.",
      },
      "sliderThree": {
        "URL_slider":"https://nsm09.casimages.com/img/2021/03/04//21030410333825871417295115.jpg",
        "URL_text":"kona un jour, kona toujours",
      },
      "URL_video":"https://v1.casimages.com/v/2021/03/04//LwKrLb-kona.mp4",
      "URL_offer":"/offre.0e78da5a.svg",
      "URL_offer_mobile":"/offerbis.508314c1.svg",
      "URL_logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/1200px-Hyundai_Motor_Company_logo.svg.png",
      "URL_warranty":"/garantie.be35aa77.svg"
    }
  ];
  $.each(kona, function (index, value) {
    document.getElementById("title").innerHTML = value.URL_title;
    document.getElementById("aftertitle").innerHTML = value.URL_aftertitle;
    document.getElementById("carousel-1").style.backgroundImage = "url("+this.sliderOne.URL_slider+")";
    document.getElementById("carousel-text-1").innerHTML = value.sliderOne.URL_text;
    document.getElementById("carousel-2").style.backgroundImage = "url("+this.sliderTwo.URL_slider+")";
    document.getElementById("carousel-text-2").innerHTML = value.sliderTwo.URL_text;
    document.getElementById("carousel-3").style.backgroundImage = "url("+this.sliderThree.URL_slider+")";
    document.getElementById("carousel-text-3").innerHTML = value.sliderThree.URL_text;
    document.getElementById("video").src = value.URL_video;
    document.getElementById("offer").src = value.URL_offer;
    document.getElementById("offer-mobile").src = value.URL_offer_mobile;
    document.getElementById("logo").src = value.URL_logo;
    document.getElementById("title-form").innerHTML = value.URL_title;
    document.getElementById("warranty-img").src = value.URL_warranty;
    document.getElementById("conditions-text").innerHTML = value.URL_conditions;
  });
});