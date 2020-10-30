<template>
  <div class="weather-widget">
    <weather-display v-if="weather" :weather="weather" />
    <location-form v-else v-model="weather" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      weather: null
    };
  }
};
</script>

<style lang="scss" scoped>
.weather-widget {
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
  padding: 10px;
}
</style>
