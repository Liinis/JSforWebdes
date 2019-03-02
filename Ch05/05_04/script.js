var gMapAPIKey = 'YOUR_API_KEAIzaSyBI2fZUqqFCkPnZDmtHXpaHnDffeQzHS64Y_HERE';

var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('hplus-map'), {
		'center': {lat: 34.1031131, lng: -118.326343},
		'zoom': 12,
		'mapTypeId': google.maps.MapTypeId.ROADMAP,
		'draggable': false,
		'scrollwheel': false
	});
}
//Från Consol:
/*
map.getZoom();
12
map.getCenter();
_.Q {lat: ƒ, lng: ƒ}
map.getCenter().lat();
34.1031131
map.getCenter().toString();
"(34.1031131, -118.32634300000001)"
*/