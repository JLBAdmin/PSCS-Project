 
let map;
let coords;
const empty = L.tileLayer('', { attribution: '' });
 
(function init() {
  initMap();
})();
 
function initMap() {
  console.log('Initializing map');
  // Set up map source
  var tiles =  L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Open Street Map',
      maxZoom: 18
    });
  var map = L.map('map', { center: [16.5717494, 100.3585106], zoom: 5, layers: [tiles] });
  map.locate({enableHighAccuracy: true});
  map.on('locationfound', (e) => {
    coords = [e.latlng.lat, e.latlng.lng];
    const newMarker = L.marker(coords);
    newMarker.bindPopup('You are Here!').openPopup();
    map.addLayer(newMarker);
    // socket.emit('userCoordinates', e.latlng);
    map.flyTo(coords, 14);
    //const map = L.map('map').setView([16.5717494, 100.3585106], 14);
  });
  
 
}