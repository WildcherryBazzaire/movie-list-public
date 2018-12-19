<template>
  <div id="root">
    <myHeader></myHeader>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import MovieTab from './components/MovieTab.vue';
export default {
  name: 'root',
  components: {
    'myHeader': Header,
    'movie-tab': MovieTab
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
// @font-face {
//     font-family: 'woomy';
//     src: url('./assets/Paintball_Beta.otf');
// }
* {
  font-family: "Trebuchet MS", Helvetica, sans-serif;
}
html, body, #root {
  width: 100%;
  height: 100%;
  margin: 0;
  color: rgb(252,252,252);
}
</style>
