<template>
  <div class="weather-widget" :class="{ loading: $store.loading }">
    <div class="inner">
      <reload-trigger />
      <weather-display v-if="$store.location" :weather="$store.weather" />
      <location-form v-else />
    </div>
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
  border-top: 5px solid #ad4343;
  border-radius: 5px;
  position: relative;
  background: var(--bg-color);
  min-width: 400px;
  display: inline-block;
  margin: 0 auto;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
  padding: 20px;
  min-height: 157px;
  .inner {
    transition: 0.5s ease all;
  }
  &.loading {
    .inner {
      opacity: 0;
    }
  }
}
</style>
