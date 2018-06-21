const MapWrapper = function(element, coords, zoom) {
 const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
 this.map = L.map(element)
 .addLayer(osmLayer)
 .setView(coords, zoom);
}

MapWrapper.prototype.addMarker = function (coords) {
 L.marker(coords).addTo(this.map);
};

module.exports = MapWrapper;
