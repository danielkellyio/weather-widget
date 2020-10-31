<template>
  <div>
    <input type="text" placeholder="Zip" v-model="zip" @input="handleZip" /> or
    <button @click="handleCurrentLocation">Use Current Location</button>
  </div>
</template>

<script>
import debounce from "lodash/debounce";
import GeoLocation from "@/support/GeoLocation";

export default {
  data() {
    return {
      zip: null
    };
  },
  methods: {
    handleZip: debounce(async function(e) {
      this.$store.locationType = "byZip";
      this.$store.location = e.target.value;
      this.$store.getWeatherData();
    }, 400),
    async handleCurrentLocation() {
      try {
        const location = await new GeoLocation().getCurrent();
        this.$store.locationType = "byGeoLocation";
        this.$store.location = location;
        this.$store.getWeatherData();
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
