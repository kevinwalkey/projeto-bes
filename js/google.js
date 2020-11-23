var mapa;

function initMap() {

  var configuracoes = {
    center: {lat: -25.431320179429655, lng: -49.26851417791917},
    zoom: 15
  }
      
  mapa = new google.maps.Map(document.getElementById('map'), configuracoes);

  var marcador = new google.maps.Marker({
    position: {lat: -25.431320179429655, lng: -49.26851417791917},
    title: "Nike Store",
    map: mapa
  });

}
-25.430137830340414, -49.26733955273941

-25.431320179429655, -49.26851417791917