import Vue from "vue";
import Weather from "@/support/Weather";
export default Vue.observable({
  loading: false,
  location: null,
  locationType: null,
  weather: {
    weather: [],
    main: {},
    name: null,
    wind: {},
    snow: {},
    rain: {}
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
    const response = await new Weather()
      .fahrenheit()
      [this.locationType](this.location)
      .get();

    this.weather = response.data;
    this.loading = false;
    window.localStorage.setItem("location", JSON.stringify(this.location));
    window.localStorage.setItem("locationType", this.locationType);
  }
});
