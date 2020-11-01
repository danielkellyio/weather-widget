<template>
  <div class="weather-display">
    <div class="left">
      <h1 class="tempature">
        {{ $store.temp }} <sup>o</sup>
        <small class="description">{{ $store.description }}</small>
      </h1>
      <h2>
        <!-- Temp Min/Max -->
        <span title="Temperature min/max">
          <font-awesome-icon class="icon" icon="thermometer-three-quarters" />
          {{ $store.tempMin }}/{{ $store.tempMax }}
        </span>

        <!-- Location -->
        <span title="Location">
          <font-awesome-icon class="icon" icon="location-arrow" />
          {{ weather.name }}
        </span>

        <!-- Wind Speed -->
        <span v-if="weather.wind" title="Wind Speed">
          <font-awesome-icon class="icon" icon="wind" />
          {{ weather.wind.speed }} mph
        </span>

        <!-- Snow Volume-->
        <span v-if="weather.snow" title="Snow Volume">
          <font-awesome-icon class="icon" icon="snowflake" />
          {{ weather.snow["1h"] }} mm/hr
        </span>

        <!-- Rain Volume-->
        <span v-if="weather.rain" title="Rain Volume for the Last Hour">
          <font-awesome-icon class="icon" icon="cloud-rain" />
          {{ weather.rain["1h"] }} mm/hr
        </span>
      </h2>
    </div>
    <div class="right">
      <weather-icon :icon-code="$store.icon" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    weather: { type: Object, required: true }
  }
};
</script>

<style scoped lang="scss">
@keyframes subtleGrow {
  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(5px);
  }
  100% {
    opacity: 0.7;
    transform: translateY(0);
  }
}
.weather-display {
  display: flex;
  text-align: left;
  align-items: center;

  .tempature {
    font-weight: bold;
    font-size: 4rem;
    margin: 5px;
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
    margin-left: -1rem;
  }

  h2 {
    font-size: 0.8rem;
    margin: 0;
    font-weight: 100;
    opacity: 0.7;
    animation: fadeUp 0.6s ease;
    span {
      margin-right: 5px;
      display: inline-block;
      .icon {
        opacity: 0.5;
      }
    }
  }
}
.left {
  width: 65%;
  color: white;
}
.right {
  width: 35%;
  animation: 1s subtleGrow ease;
}
.right,
.left {
  height: 100%;
  position: relative;
}
</style>
