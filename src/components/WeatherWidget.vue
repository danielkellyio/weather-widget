<template>
  <div class="weather-widget">
    <reload-trigger />
    <weather-display v-if="$store.location" :weather="$store.weather" />
    <location-form v-else />
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
        name: null,
        wind: {}
      }
    };
  },
  methods: {
    async getWeatherData({ location, locationType }) {
      const response = await new Weather()
        .fahrenheit()
        [locationType](location)
        .get();

      this.$store.weather = response.data;
      window.localStorage.setItem("location", JSON.stringify(location));
      window.localStorage.setItem("locationType", locationType);
    }
  },
  created() {
    this.$store.initWeather();
  }
};
</script>

<style lang="scss" scoped>
.weather-widget {
  position: relative;
  background: var(--bg-color);
  min-width: 400px;
  display: inline-block;
  margin: 0 auto;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
  padding: 20px;
}
</style>
