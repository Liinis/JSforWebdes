var gMapAPIKey = 'AIzaSyBI2fZUqqFCkPnZDmtHXpaHnDffeQzHS64';


var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('hplus-map'), {
		center: {lat: 34.1031131, lng: -118.326343},
		zoom: 8
	});
}