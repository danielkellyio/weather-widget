<template>
  <div class="weather-display">
    <div :class="`temp-indicator-circle ${tempColor}`"></div>
    <div class="left">
      <h1>
        <span class="temperature">
          {{ $store.temp }}
          <sup>
            o
            <span style="font-weight:200;">{{ $store.tempUnitAbbrev }}</span>
          </sup>
        </span>
        <small class="description">{{ $store.description }}</small>
      </h1>
      <h2>
        <!-- Location -->
        <span title="Location">
          <font-awesome-icon class="icon" icon="location-arrow" />
          {{ weather.name }}
        </span>

        <!-- Temp Min/Max -->
        <span title="Temperature min/max">
          <font-awesome-icon class="icon" icon="thermometer-three-quarters" />
          {{ $store.tempMin }}/{{ $store.tempMax }}
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
  },
  computed: {
    hot() {
      return this.$store.tempUnit === "celsius" ? 32 : 90;
    },
    cold() {
      return this.$store.tempUnit === "celsius" ? 10 : 50;
    },
    tempColor() {
      if (this.$store.temp > this.hot) {
        return "hot";
      }
      if (this.$store.temp < this.cold) {
        return "cold";
      }
      return "moderate";
    }
  }
};
</script>

<style scoped lang="scss">
@keyframes subtleGrow {
  0% {
    transform: scale(0.65);
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
@keyframes fadeDown {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 0.7;
    transform: translateY(0);
  }
}
@keyframes fadeDown {
  0% {
    opacity: 0;
    transform: translateY(-10px);
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
  h1 {
    font-size: 4rem;
    margin: 5px;
  }
  .temperature {
    font-weight: bold;
    white-space: nowrap;
    animation: fadeDown 0.6s ease;
    display: inline-block;
    sup {
      vertical-align: text-top;
      transform: translateX(-1rem);
      font-size: 1.2rem;
      display: inline-block;
    }
  }
  .description {
    font-size: 1.1rem;
    font-weight: 300;
    margin-left: -2rem;
  }

  h2 {
    font-size: 0.8rem;
    margin: 0;
    font-weight: 100;
    opacity: 0.7;
    transition: 0.3s ease all;
    animation: fadeUp 0.6s ease;
    span {
      margin-right: 5px;
      display: inline-block;
      .icon {
        opacity: 0.5;
      }
    }
  }
  &:hover {
    h2 {
      opacity: 1;
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
.temp-indicator-circle {
  height: 300px;
  width: 290px;
  border-radius: 50%;
  background: var(--moderate);
  border: 6px solid var(--moderate-light);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -40px;
  transition: 0.3s ease background;
  opacity: 1;
  overflow: hidden;
  &.cold {
    background: var(--cold);
    border: 6px solid var(--cold-light);
  }
  &.hot {
    background: var(--hot);
    border: 6px solid var(--hot-light);
  }
}
</style>
