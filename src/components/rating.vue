<template>
  <div id="rating-container">
      <span class="squid-stars" v-for="index in 10"> <!-- checks rating and gives the squids -->
          <img v-if="index > rating" src="../assets/images/rating_squid_trans.png" alt="">
          <img v-else src="../assets/images/rating_squid_filled.png" alt="">
      </span>
  </div>
</template>

<script>
export default {
  name:'rating-container',
  props: {
      rating: {
          required: true
      }
  }
}
</script>

<style lang="scss" scoped>
#rating-container {
    display: flex;
    position: absolute;
    width: 100%;
    height: 15%;
    margin: 0 auto; 
    background: rgba(0,0,0,0.3);
    bottom: 0%;
    padding: 0.2rem;
    justify-content: space-evenly;
}
.squid-stars {
    height: auto;
    width: auto;
}
.squid-stars > img {
    height: 95%;
}
.img {
    height: 100%;
}

</style>
