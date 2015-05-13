function initialize() {
	  
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  
  google.maps.event.addListener(map, 'click', function(event){
	placeMarker(event.latLng);
  });
  
  function placeMarker(location){
	marker = new google.maps.Marker({
		position: location,
		map: map,
		title: 'Novo Marcador',
		animation: google.maps.Animation.DROP
	});
	map.setCenter(location);
  }
}

function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyBQPmnXCrhTYYJdESzaHRh7e3qeendXXAs&sensor=TRUE&callback=initialize";
  document.body.appendChild(script);
}

window.onload = loadScript;