import Vue from "vue";
import Weather from "@/support/Weather";
export default Vue.observable({
  loading: false,
  location: null,
  locationType: null,
  flipped: false,
  flat: false,
  _settings: false,
  tempUnit: "fahrenheit",
  error: null,
  weather: {
    weather: [],
    main: {},
    name: null,
    wind: {},
    snow: {},
    rain: {}
  },
  get isFlipped() {
    return !this.location || this.flipped;
  },
  get showSettings() {
    return !this.location || this.settings;
  },
  get showWeatherDisplay() {
    return !this.showSettings && !this.error;
  },
  get showError() {
    return this.error && !this.settings;
  },
  get tempUnitAbbrev() {
    return this.tempUnit[0].toUpperCase();
  },
  get tempMin() {
    return Math.round(this.weather.main.temp_min);
  },
  get tempMax() {
    return Math.round(this.weather.main.temp_max);
  },
  get description() {
    const weather = this.weather.weather;
    if (!weather.length) return "";
    return weather[0].description;
  },
  set description(value) {
    this.weather.weather[0].description = value;
  },
  get icon() {
    const weather = this.weather.weather;
    if (!weather.length) return "";
    return weather[0].icon;
  },
  set icon(value) {
    this.weather.weather[0].icon = value;
  },
  get temp() {
    return this.weather.main.temp ? Math.round(this.weather.main.temp) : "--";
  },
  set temp(value) {
    this.weather.main.temp = value;
  },
  get settings() {
    return this._settings;
  },
  set settings(value) {
    this.flipped = value;
    setTimeout(() => {
      this._settings = value;
    }, 250);
  },
  initWeather() {
    const savedLocation = window.localStorage.getItem("location");
    const savedLocationType = window.localStorage.getItem("locationType");
    if (savedLocation && savedLocationType) {
      this.location = JSON.parse(savedLocation);
      this.locationType = savedLocationType;
      this.getWeatherData();
    }
  },
  async getWeatherData() {
    this.loading = true;
    try {
      const response = await new Weather()
        [this.tempUnit]()
        [this.locationType](this.location)
        .get();

      this.error = false;
      this.weather = response.data;
      this.flipped = false;
      window.localStorage.setItem("location", JSON.stringify(this.location));
      window.localStorage.setItem("locationType", this.locationType);
    } catch (error) {
      this.error = true;
    }
    this.loading = false;
  }
});
