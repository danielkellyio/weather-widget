<template>
  <div class="flip-card" :class="{ flipped: $store.isFlipped }">
    <div
      class="weather-widget flip-card-inner"
      :class="{ loading: $store.loading, flat: $store.flat }"
    >
      <div class="fade-in">
        <widget-settings :class="{ 'flip-card-back': $store.isFlipped }" />
        <weather-display
          class="fade-in"
          v-if="$store.showWeatherDisplay"
          :weather="$store.weather"
        />
        <settings-form
          class="fade-in flip-card-back"
          v-if="$store.showSettings"
        />
        <div v-if="$store.showError" class="error">
          Error Loading Weather Data
          <p style="color:white">
            Make sure zip is valid
            <a href="#" @click.prevent="$store.settings = true">Try Again</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  created() {
    this.$store.initWeather();
    if (!this.$store.location) this.$store.flipped = true;
  }
};
</script>

<style lang="scss" scoped>
.weather-widget {
  overflow: hidden;
  position: relative;
  text-align: left;
  border-radius: 5px;
  background: var(--bg-color);
  min-width: 425px;
  display: inline-block;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
  border: 1px solid black;
  padding: 20px;
  height: 160px;
  .fade-in {
    transition: 1s ease all;
  }
  &.loading {
    .fade-in {
      opacity: 0;
    }
  }
  &:not(.flat) {
    &::before,
    &::after {
      content: "";
      position: absolute;
      z-index: 10;
      width: 150%;
      background: white;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      pointer-events: none;
    }
    &::before {
      height: 15%;
      opacity: 0.1;
      box-shadow: 0 0 20px 20px white;
    }
    &::after {
      height: 1%;
      opacity: 0.02;
      box-shadow: 0 0 5px 5px white;
    }
  }
  a {
    color: var(--accent-color);
  }
}
.error {
  color: var(--hot-light);
}
</style>
