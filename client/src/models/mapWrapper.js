const MapWrapper = function(element, coords, zoom) {
 const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
 this.map = L.map(element)
 .addLayer(osmLayer)
 .setView(coords, zoom);
}

module.exports = MapWrapper;
