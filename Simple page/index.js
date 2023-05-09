function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13
    });
    var input = document.getElementById('search');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);
    
    varinfowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
    });
    
    autocomplete.addListener('place_changed', function() {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();
    if (!place.geometry) {
    window.alert("Autocomplete's returned place contains no geometry");
    return;
    }
    
    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
    map.fitBounds(place.geometry.viewport);
    } else {
    map.setCenter(place.geometry.location);
    map.setZoom(17);
    }
    marker.setIcon(({
    url: place.icon,
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(35, 35)
    }));
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);
    
    });
    }