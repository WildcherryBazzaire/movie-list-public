<template>
  <div id="descriptionContainer">
      <p class="slogan">{{slogan}}</p>
      <p class="description">{{descript}}</p>
  </div>
</template>

<script>
export default {
  name:'threed-component',
  props: {
      descript: {
          type: String,
          required: true
      }
  }
  data () {
    return {
        slogan: 'More On description'
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>

</style>
