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
      weather: null,
      locationType: "byGeoLocation",
      location: null,
      zip: null
    };
  },
  methods: {
    handleZip: debounce(async function(e) {
      this.location = e.target.value;
      this.$emit("input", {
        locationType: "byZip",
        location: this.location
      });
    }, 400),
    async handleCurrentLocation() {
      try {
        this.location = await new GeoLocation().getCurrent();
        this.$emit("input", {
          locationType: "byGeoLocation",
          location: this.location
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
