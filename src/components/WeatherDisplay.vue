<template>
  <div>
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
</template>
<script>
export default {
  props: {
    weather: { type: Object, required: true }
  }
};
</script>
