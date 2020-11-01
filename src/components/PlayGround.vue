<template>
  <div style="margin-top:10px;">
    <h3>
      Developer Playground
    </h3>
    <label>
      Location
      <input type="text" v-model="$store.weather.name" />
    </label>

    <label>
      Temp
      <input type="number" v-model="$store.temp" />
    </label>

    <label>
      Wind Speed
      <input type="text" v-model="$store.weather.wind.speed" />
    </label>

    <label>
      Description
      <input type="text" v-model="$store.description" />
    </label>

    <label>
      Icon
      <select type="text" v-model="$store.icon">
        <option v-for="(label, value) in icons" :value="value" :key="value">
          {{ label }}
        </option>
      </select>
    </label>

    <label>
      Settings Active
      <input type="checkbox" v-model="$store.settings" />
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: {
        "01d": "Sunny",
        "01n": "Sunny",
        "02d": "Cloudy",
        "02n": "Cloudy",
        "03d": "Cloudy",
        "03n": "Cloudy",
        "04d": "Cloudy",
        "04n": "Cloudy",
        "09d": "Rainy",
        "09n": "Rainy",
        "10d": "SunShower",
        "10n": "SunShower",
        "11d": "Thunderstorm",
        "11n": "Thunderstorm",
        "13d": "Flurries",
        "13n": "Flurries",
        "50d": "Cloudy",
        "50n": "Cloudy"
      }
    };
  }
};
</script>

<style scoped>
label {
  display: inline-block;
  margin-right: 20px;
}
</style>
