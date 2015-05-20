function initialize() {
		var mapOptions = {
			zoom: 12,
			center: new google.maps.LatLng(-25.363882,131.044922),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
		google.maps.event.addListener(map, 'click', function(event) {
    		placeMarker(event.latLng);
  		});

  		function placeMarker(location) {
		var marker = new google.maps.Marker({
			position: location,
			map: map,
			title: "new Marker",
			animation: google.maps.Animation.DROP
		});

		$('#latitude').val(location.lat())
		$('#longitude').val(location.lng())
		map.setCenter(location);
	}
	}


	function loadScript() {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyChZmr53ae-Rp57sXbnHgKw-H9L0FGyHbw&sensor=TRUE_OR_FALSE&callback=initialize";
		document.body.appendChild(script);
	}
