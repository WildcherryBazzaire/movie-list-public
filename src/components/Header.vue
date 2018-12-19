<template>
  <div id="myHeader">
    <ul>
      <li v-for="items in content">
        <h3 class="contents">{{items.name}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'my-header',
  data () {
    return {
      content: [
          {name:"Submit a Movie"},
          {name:"Delete a Movie"},
          {name:"Edit a Existing Movie"}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#myHeader {
  display: flex;
  width: 100%;
  height: 8%;
  background: black;
}
ul {
  display: flex;
  width: 95%;
  justify-content: space-between;
  margin: 0;
  padding: 0 2.5%;
}
li {
  display: inline-grid;
}
.contents {
  color: rgb(250, 250, 250);
  margin: auto 0;
  font-size: 1.65rem;
}
</style>
