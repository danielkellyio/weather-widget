<template>
  <div class="weather-display">
    <div class="left">
      <h1 class="tempature">
        {{ temp }} <sup>o</sup>
        <small
          v-for="(item, index) in weather.weather"
          class="description"
          :key="index"
        >
          {{ item.description }}
        </small>
      </h1>
      <h2>
        <span>{{ weather.name }}</span> |
        <span>{{ weather.wind.speed }} mph</span>
      </h2>
    </div>
    <div class="right">
      <img
        :src="
          `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`
        "
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    weather: { type: Object, required: true }
  },
  computed: {
    temp() {
      return Math.round(this.weather.main.temp);
    }
  }
};
</script>

<style scoped lang="scss">
.weather-display {
  display: flex;
  text-align: left;

  .tempature {
    font-weight: bold;
    font-size: 4rem;
    margin-bottom: 5px;
    sup {
      vertical-align: text-top;
      transform: translateX(-1rem);
      font-size: 1.2rem;
      display: inline-block;
    }
  }
  .description {
    font-size: 1.4rem;
    font-weight: 300;
  }

  h2 {
    font-size: 0.8rem;
    margin: 0;
    font-weight: 100;
  }
}
</style>
