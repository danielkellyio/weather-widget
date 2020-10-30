<template>
  <div class="weather-widget">
    <weather-display v-if="location" :weather="weather" />
    <location-form v-else v-model="location" @input="getWeatherData" />
  </div>
</template>
<script>
import Weather from "@/support/Weather";

export default {
  data() {
    return {
      location: null,
      weather: {
        weather: [],
        main: {},
        name: null
      }
    };
  },
  methods: {
    async getWeatherData({ location, locationType }) {
      const response = await new Weather()
        .fahrenheit()
        [locationType](location)
        .get();

      this.weather = response.data;
      window.localStorage.setItem("location", JSON.stringify(location));
      window.localStorage.setItem("locationType", locationType);
    }
  },
  created() {
    const savedLocation = window.localStorage.getItem("location");
    const savedLocationType = window.localStorage.getItem("locationType");
    if (savedLocation && savedLocationType) {
      this.location = savedLocation;
      this.getWeatherData({
        location: JSON.parse(savedLocation),
        locationType: savedLocationType
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.weather-widget {
  display: inline-block;
  margin: 0 auto;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
  padding: 20px;
}
</style>
