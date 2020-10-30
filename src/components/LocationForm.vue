<template>
  <div>
    <input type="text" placeholder="Zip" v-model="zip" @input="handleZip" /> or
    <button @click="handleCurrentLocation">Use Current Location</button>
  </div>
</template>

<script>
import Weather from "@/support/Weather";
import debounce from "lodash/debounce";
import GeoLocation from "@/support/GeoLocation";

export default {
  data() {
    return {
      weather: null,
      locationType: "byGeoLocation",
      location: null,
      zip: null
    };
  },
  methods: {
    async getWeatherData() {
      const response = await new Weather()
        .fahrenheit()
        [this.locationType](this.location)
        .get();
      this.weather = response.data;
      window.localStorage.setItem("location", JSON.stringify(this.location));
      window.localStorage.setItem("locationType", this.locationType);
      this.$emit("input", this.weather);
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
  },
  created() {
    const savedLocation = window.localStorage.getItem("location");
    const savedLocationType = window.localStorage.getItem("locationType");
    if (savedLocation && savedLocationType) {
      this.location = JSON.parse(savedLocation);
      this.locationType = savedLocationType;
      this.getWeatherData();
    }
  }
};
</script>
