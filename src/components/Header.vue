<template>
  <div id="myHeader">
    <ul>
      <li v-for="items in content">
        <h3 class="contents" @click="changeComponent(items.call)">{{items.name}}</h3>
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
          {name:"View Movies",call: "movie-tab"},
          {name:"Submit a Movie",call: "sumbit-tab"},
          {name:"Delete a Movie",call: "delete-tab"},
          {name:"Edit a Existing Movie",call:"put-tab"}
      ]
    }
  },
  methods: {
    changeComponent: function(event) {
      console.log("doing something");
      this.$emit('emittedEvent',event);
    }
  }
}
</script>

<style lang="scss" scoped>
#myHeader {
  display: flex;
  width: 100%;
  height: 8%;
  background: #272727;
}
h3:hover {
  cursor:pointer;
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
