var gMapAPIKey = 'AIzaSyBI2fZUqqFCkPnZDmtHXpaHnDffeQzHS64';

var map;
function initMap() {
	var storeLocation = {lat: 34.1031131, lng: -118.326343};
	
	map = new google.maps.Map(document.getElementById('hplus-map'), {
		'center' : storeLocation,
		'zoom' : 12,
		'mapTypeId' : google.maps.MapTypeId.ROADMAP,
		'draggable' : false,
		'scrollwheel' : false
	});


var marker = new google.maps.Marker({
	'position': storeLocation,
	'map': map,
	'title': 'hplus sport in Los Angeles(Capitol Records IRL)'
  });

}