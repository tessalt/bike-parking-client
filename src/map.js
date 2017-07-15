import leaflet from 'leaflet';
const TILE_URL = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
const ATTRIBUTION = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>';
const TOKEN = 'pk.eyJ1IjoidGVzc2FsdCIsImEiOiJjajU0ZGk4OTQwZDlxMzNvYWgwZmY4ZjJ2In0.zhNa8fmnHmA0d9WKY1aTjg';

export default class Map {
  constructor(lat, lng) {
    this.map = leaflet.map('map').setView([lat, lng], 13);
  }

  initTiles() {
    leaflet.tileLayer(TILE_URL, {
      attribution: ATTRIBUTION,
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: TOKEN 
    }).addTo(this.map);
  }
}