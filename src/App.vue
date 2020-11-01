<template>
  <div id="app">
    <h1>
      Weather Widget
    </h1>

    <weather-widget />
    <div class="meta">
      <small class="muted">
        <a
          href="https://github.com/danielkellyio/weather-widget"
          target="_blank"
        >
          Github Repo
        </a>
        |
        <a href="https://codepen.io/joshbader/pen/EjXgqr" target="_blank">
          Weather Icon Source
        </a>
        |
        <a href="#" @click="playground = !playground">Developer Playground</a>
      </small>
    </div>

    <play-ground v-if="playground" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      playground: false
    };
  }
};
</script>

<style lang="scss">
:root {
  //--bg-color: #272727;
  --bg-color: #383636;
  --accent-color: #52a6fe;
  --cold: #1e3a58;
  --cold-light: #30557c;
  --hot: #ac4949;
  --hot-light: #d97171;
  --moderate: #555963;
  --moderate-light: #7d8391;
}
body {
  background: rgb(255, 255, 255);
  background: radial-gradient(circle, white 41%, #fffbf4 100%);
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
.meta {
  margin-top: 20px;
  a {
    margin: 0 10px 0;
    color: inherit;
  }
}
</style>
