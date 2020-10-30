export default class GeoLocation {
  getCurrent() {
    if (!this.isSupported) return false;
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => {
          resolve({
            lat: position.coords.latitude,
            long: position.coords.longitude
          });
        },
        error => reject(error)
      );
    });
  }
  get isSupported() {
    return !!navigator.geolocation;
  }
}
