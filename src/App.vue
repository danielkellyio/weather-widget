<template>
  <div id="app">
    <weather-widget />
    <small class="muted block" style="margin-top:5px;">
      Icons from: https://codepen.io/joshbader/pen/EjXgqr
    </small>
    <play-ground />
  </div>
</template>

<style lang="scss">
:root {
  --bg-color: #272727;
}
#app {
  font-family: "Open Sans", sans-serif;
  text-align: center;
}
*,
*:after,
*:before {
  box-sizing: border-box;
}
img {
  max-width: 100%;
}
.muted {
  opacity: 0.5;
}
.block {
  display: block;
}
</style>
