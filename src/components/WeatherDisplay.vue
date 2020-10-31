<template>
  <div class="weather-display">
    <div class="left">
      <h1 class="tempature">
        {{ $store.temp }} <sup>o</sup>
        <small class="description">{{ $store.description }}</small>
      </h1>
      <h2>
        <span>
          <font-awesome-icon class="icon" icon="location-arrow" />
          {{ weather.name }}
        </span>
        <span>
          <font-awesome-icon class="icon" icon="wind" />
          {{ weather.wind.speed }} mph
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
  }

  h2 {
    font-size: 0.8rem;
    margin: 0;
    font-weight: 100;
    opacity: 0.7;
    span {
      margin-right: 5px;
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
}
.right,
.left {
  height: 100%;
  position: relative;
}
</style>
