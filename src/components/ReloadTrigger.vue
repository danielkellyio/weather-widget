<template>
  <font-awesome-icon
    icon="sync-alt"
    style="color:white"
    class="reload-icon"
    :class="{ spin }"
    @click="$store.reload"
  />
</template>
<script>
export default {
  computed: {
    spin() {
      return this.$store.loading;
    }
  }
};
</script>

<style scoped lang="scss">
.reload-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  opacity: 0.5;
  transition: 0.2s ease all;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
}
</style>
