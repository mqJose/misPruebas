/*....................................................
	Inicialicion del googleMaps
....................................................*/
function initialize() {
    var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(-16.7258, -68.0473)
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
}

function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' + 'callback=initialize';
    document.body.appendChild(script);
}
window.onload = loadScript;
/*....................................................
	Codigo de Funcionalidad
....................................................*/
