<template>
  <div id="submitContainer">
      <input v-for="item in inputs" :type="item.name" :placeholder="item.name" />
      <button>Submit</button>
  </div>
</template>

<script>
export default {
  name:'threed-component',
  data () {
    return {
        inputs: [
            {name:"username", value:"username"},
            {name:"Movie Title", value:"text"}
        ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
