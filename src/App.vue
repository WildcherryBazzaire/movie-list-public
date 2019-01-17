<template>
  <div id="root"> <!-- Literal Template -->
    <message-tab v-if="requested"> </message-tab>
    <myHeader v-on:emittedEvent="changePart($event)"></myHeader> <!--Header is put here in-->
    <div id="movingParts"> <!-- where things are dynamically put-->
      <!-- <three-scene> </three-scene> -->
      <keep-alive>
        <component :is="currentTab" v-on:emitMessage="Requested"> </component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import MovieTab from './components/MovieTab.vue';
import SubmitTab from './components/Submit.vue';
// import Three from './components/3D.vue';
import DeleteTab from './components/Delete.vue';
import PutTab from './components/Put.vue';
import MessageBox from './components/Message.vue';
export default {
  name: 'root',
  components: {
    'myHeader': Header,
    'movie-tab': MovieTab,
    'sumbit-tab': SubmitTab,
    // 'three-scene': Three,
    'delete-tab': DeleteTab,
    'put-tab': PutTab,
    'message-tab': MessageBox
  },
  data () {
    return {
      currentTab: 'movie-tab',
      requested: false
    }
  },
  methods: {
    changePart: function(event) {
      this.currentTab = event;
    },
    Requested: function() {
      this.requested = true;
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
  position: relative;
}

body {
  background-image: url('./assets/images/background.png');
  background-size: 360px 360px;
}

#movingParts {
  display: flex;
  height: 92%;
  width: 100%;
 
  
}
</style>
