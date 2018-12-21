<template>
  <div id="threeD_Container">
        <vgl-renderer antialias>
        <vgl-scene>
            <vgl-sphere-geometry name="sphere"></vgl-sphere-geometry>
            <vgl-mesh-standard-material name="std"></vgl-mesh-standard-material>
            <vgl-mesh geometry="sphere" material="std"></vgl-mesh>
            <vgl-ambient-light color="#ffeecc"></vgl-ambient-light>
            <vgl-directional-light position="0 1 1"></vgl-directional-light>
        </vgl-scene>
        <vgl-perspective-camera orbit-position="5 1 1;"></vgl-perspective-camera>
    </vgl-renderer>
  </div>
</template>

<script>
export default {
  name:'threed-component',
  data () {
    return {
      content: [
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#threeD_Container {
    display: inline-block;
    width: 50%;
    height: 100%;
}
canvas {
    height: 100%;
    width: 100%;
}
#threeD_Container > div {
    width: 100%;
    height: 100%;
}
* > iframe {
    display: none;
}
</style>
