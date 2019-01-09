<template>
  <div id="root">
    <myHeader></myHeader>
    <component :is=""> </component>
    <movie-tab> </movie-tab>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import MovieTab from './components/MovieTab.vue';
import SubmitTab from './components/Submit.vue';
export default {
  name: 'root',
  components: {
    'myHeader': Header,
    'movie-tab': MovieTab,
    'sumbit-tab': SubmitTab
  },
  data () {
    return {
      // currentTab: 
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
  overflow: hidden;
}

body {
  background-image: url('./assets/background.png');
  background-size: 360px 360px;
}


</style>
