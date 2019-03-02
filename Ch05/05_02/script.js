var gMapAPIKey = 'AIzaSyBI2fZUqqFCkPnZDmtHXpaHnDffeQzHS64';

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('hplus-map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }