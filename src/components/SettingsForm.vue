<template>
  <div style="color:white;">
    <div class="locations">
      <input type="text" placeholder="Zip" v-model="zip" @input="handleZip" />
      <button @click="handleCurrentLocation">or Use Current Location</button>
    </div>
    <div class="temp-unit">
      <small>
        Temperature Unit
        <label>
          <input
            v-model="$store.tempUnit"
            name="tempUnit"
            type="radio"
            value="fahrenheit"
          />
          F
        </label>
        <label>
          <input
            v-model="$store.tempUnit"
            name="tempUnit"
            type="radio"
            value="celsius"
          />
          C
        </label>
      </small>
    </div>

    <div class="flat">
      <small>
        <label>
          <input v-model="$store.flat" name="flat" type="checkbox" />
          Flat Style
        </label>
      </small>
    </div>
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
      const zip = e.target.value;
      if (!this.validZip(zip)) return;
      this.$store.locationType = "byZip";
      this.$store.location = zip;
      await this.$store.getWeatherData();
      this.$store.flipped = false;
      this.$store.settings = false;
    }, 300),
    async handleCurrentLocation() {
      try {
        const location = await new GeoLocation().getCurrent();
        this.$store.locationType = "byGeoLocation";
        this.$store.location = location;
        await this.$store.getWeatherData();
        this.$store.flipped = false;
        this.$store.settings = false;
      } catch (err) {
        console.log(err);
      }
    },
    validZip(zip) {
      return zip.length === 5;
    }
  },
  watch: {
    "$store.tempUnit": {
      handler() {
        if (this.$store.location) {
          this.$store.getWeatherData();
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.locations {
  position: relative;
  display: flex;
  margin-bottom: 10px;
  input {
    width: 100%;
    padding: 5px;
    font-size: 1rem;
  }
  button {
    display: block;
    cursor: pointer;
    background: var(--accent-color);
    border: none;
    color: white;
    padding: 12px 8px;
    appearance: none;
    white-space: nowrap;
  }
}
</style>
