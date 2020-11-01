<template>
  <div class="tools">
    <span @click="$store.settings = !$store.settings">
      <font-awesome-icon icon="cog" style="color:white" />
    </span>
    <span @click="$store.getWeatherData()" class="reload-trigger">
      <font-awesome-icon icon="sync-alt" style="color:white" />
    </span>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
.tools {
  position: absolute;
  bottom: 5px;
  right: 10px;
  transform: scale(0.9);
  &.flip-card-back {
    left: 10px;
    right: auto;
  }
  span {
    cursor: pointer;
    opacity: 0.5;
    transition: 0.2s ease all;
    margin-left: 10px;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
