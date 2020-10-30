<template>
  <div class="weather-widget">
    <input type="text" placeholder="Zip" v-model="zip" @input="handleZip" /> or
    <button @click="handleCurrentLocation">Use Current Location</button>

    <div v-if="weather">
      <h1>{{ weather.name }}</h1>
      <h3>Today's Weather</h3>
      <img
        :src="
          `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`
        "
        alt=""
      />
      <h4>{{ weather.weather[0].description }}</h4>
      <div class="tempature">65 <sup>o</sup></div>
    </div>
  </div>
</template>
<script>
import Weather from "@/support/Weather";
import debounce from "lodash/debounce";
import GeoLocation from "@/support/GeoLocation";

export default {
  data() {
    return {
      locationType: "byGeoLocation",
      location: null,
      zip: null,
      weather: null
    };
  },
  methods: {
    async getWeatherData() {
      const response = await new Weather()
        .fahrenheit()
        [this.locationType](this.location)
        .get();
      this.weather = response.data;
    },
    handleZip: debounce(async function(e) {
      this.locationType = "byZip";
      this.getWeatherData(e.target.value);
    }, 400),
    async handleCurrentLocation() {
      try {
        this.location = await new GeoLocation().getCurrent();
        this.locationType = "byGeoLocation";
        this.getWeatherData();
      } catch (err) {
        this.locationType = "byZip";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.weather-widget {
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
  padding: 10px;
}
</style>
