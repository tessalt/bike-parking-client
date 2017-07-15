import Step from '../step';

export default class StepOne extends Step {
  constructor() {
    super(...arguments);
    this.state = {
      lat: null,
      lng: null
    }
  }

  get html() {
    const head = this.template(this.copy);
    const body = `<button type="button" id="button" class="splash-button button">Get Current Location</button>`;
    return head + body;
  }

  locationAcquired(position) {
    this.router.navigate(`/survey/1b?lat=${position.coords.latitude}&lng=${position.coords.longitude}`);
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
  
  bind() {
    document.getElementById('button').addEventListener('click', (evt) => {
      this.getDeviceLocation();
    });
  }
}