<template>
  <div id="submitContainer">
    <input type="text" v-model="submit.name" placeholder="Name of Movie" />
    <select v-model="submit.rating">
      <option value="" selected="selected" disabled>rating</option>
      <option type="number" v-for="index in 10" :value="index">{{index}}</option>
    </select>
    <input type="text" v-model="submit.comment" placeholder="Additional Comments" />
    <button v-if="submit.name !== '' && submit.rating !== 0 && submit.comment !== ''" @click.once="PutContent()">Submit</button>
  </div>
</template>

<script>
export default {
  name:'threed-component',
  data () {
    return {
      submit: {
        name: '',
        rating: 0,
        comment: ''
      }
    }
  },
  methods: {
    PutContent: function() {
          console.log('posted something');
          this.$http.post('https://ipezpsmb8i.execute-api.us-west-2.amazonaws.com/dev/post',this.submit);
          this.DeliverMessage();

    },
    DeliverMessage: function() {
      console.log('something is being done');
      this.$emit('emitMessage','deliver the bomb');
    }
  }
}
</script>

<style lang="scss" scoped>
#submitContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-evenly;
}

input {
  background: transparent;
  border: 5px solid white;
  width: 50%;
  height: 2rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  margin: 1rem auto;
  color: white;
  border-radius: 5rem;
}
select {
  width: 50%;
  margin: 0 auto;
  height: 2.9rem;
  background: transparent;
  border: 3px solid white;
  border-radius: 3rem;
  color: white;
  font-size: 2rem;
  padding: 0 0.5rem;
  color: black;
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
