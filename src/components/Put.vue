<template>
  <div id="deleteContainer">
    <input type="text" v-model="submit.oldMovie" placeholder="Name of Old Movie" />
    <input type="text" v-model="submit.newMovie" placeholder="New Name" />
    <button v-if="submit.oldMovie !=='' && submit.newMovie !== ''" @click.once="PutContent()">Submit</button>
  </div>
</template>

<script>
export default {
  name:'threed-component',
  data () {
    return {
      submit: {
        oldMovie:'',
        newMovie:''
      }
    }
  },
  methods: {
      PutContent: function() {
          this.$http.put('https://ipezpsmb8i.execute-api.us-west-2.amazonaws.com/dev/put',this.submit);
          this.DeliverMessage();
      },
      DeliverMessage: function() {
        this.$toasted.show('level hundred boss');
        this.$emit('emitMessage','deliver the bomb');
      }
  },
}
</script>

<style lang="scss" scoped>
#deleteContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
}

input {
  background: transparent;
  border: 5px solid white;
  width: 75%;
  height: 2rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  margin: 1rem auto;
  color: white;
  border-radius: 5rem;
}
button {
      width: 25%;
    margin: 1rem auto;
    /* height: 2rem; */
    background: transparent;
    color: white;
    border: 3px solid white;
    border-radius: 3rem;
    padding: 0.5rem;
    font-size: 2rem;
}
</style>
