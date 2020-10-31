<template>
  <div style="margin-top:10px;">
    <input
      type="text"
      v-model="$store.weather.name"
      placeholder="Location Name"
    />
    <input
      type="text"
      v-model="$store.weather.wind.speed"
      placeholder="Wind Speed"
    />
    <input type="text" v-model="$store.description" placeholder="Description" />
    <select type="text" v-model="$store.icon">
      <option v-for="(label, value) in icons" :value="value" :key="value">
        {{ label }}
      </option>
    </select>
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
