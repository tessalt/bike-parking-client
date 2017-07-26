import Step from '../step';
const TOKEN = 'pk.eyJ1IjoidGVzc2FsdCIsImEiOiJjajU0ZGk4OTQwZDlxMzNvYWgwZmY4ZjJ2In0.zhNa8fmnHmA0d9WKY1aTjg';
import MapboxClient from 'mapbox/lib/services/geocoding';
import { on } from '../util';

export default class StepOne extends Step {
  constructor() {
    super(...arguments);
    this.state = {
      lat: null,
      lng: null
    }
   this.mapBoxClient = new MapboxClient(TOKEN);
   this.output = null;
  }

  get html() {
    const head = this.template(this.copy);
    const body = `<button type="button" id="button" class="splash-button button">Get Current Location</button>
      <input type="text" id="query"><button id="search">Search Location</button>
      <div id="output"></div>
      `;
    return head + body;
  }

  locationAcquired(position) {
    this.router.navigate(`/survey/1b?lat=${position.coords.latitude}&lng=${position.coords.longitude}&pin=`);
  }
  
  locationFailed() {
    alert("Sorry, no position available.");
  }

  getDeviceLocation() {
    if ('geolocation' in navigator) {
      console.log('looking');
      navigator.geolocation.watchPosition(this.locationAcquired.bind(this), this.locationFailed);
    } else {
        /* geolocation IS NOT available */
    } 
  }

  geocode(input) {
    this.mapBoxClient.geocodeForward(input, {
      country: 'ca',
      proximity: {
        latitude: 43.6573662,
        longitude: -79.38125289999999 
      }
    }).then((response) => {
      if (response.entity && response.entity.features.length) {
        const html = response.entity.features.reduce((memo, feature) => {
          return memo += `<div class="guess" data-loc=${feature.geometry.coordinates}>${feature.place_name}</div>`
        }, '');
        document.getElementById('output').innerHTML = html;
      }
    })
  }
  
  bind() {
    document.getElementById('button').addEventListener('click', (evt) => {
      this.getDeviceLocation();
    });
    document.getElementById('query').addEventListener('keyup', (evt) => {
     this.geocode(evt.target.value);
    });
    this.output = document.getElementById('output')

    on('#output', 'click', '.guess', (evt) => {
      const [longitude, latitude] = evt.target.dataset.loc.split(',');
      this.locationAcquired({coords: {latitude, longitude}})
    });

    document.getElementById('search').addEventListener('click', (evt) => {
    });
  }
}