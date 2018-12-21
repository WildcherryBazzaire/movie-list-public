<template>
  <div id="movieTab">
      <three-d> </three-d>
      <ul>
          <li>
            <p class='movieName'>{{sampleStuff.movie}}</p>
            <div class='movieImage'>
              <p>Images will be Updated Soon!!!</p>
            </div>
            <p class='authorName'>{{sampleStuff.sumbittedBy}}</p>
            <p class='rating'>{{sampleStuff.rating}}</p>
            <p class='description'>{{sampleStuff.description}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
import ThreeD from './3D.vue';
export default {
  name:'MovieTab',
  components: {
    'three-d': ThreeD
  },
  data () {
    return {
        sampleStuff: {movie:'MLP: The Movie',rating:5,description:'ooga booga',sumbittedBy:'James_Games'}
    }
  }
}
</script>

<style lang="scss" scoped>
#movieTab {
  height: 92%;
  width: 100%;
}
ul {
  display: inline-block;
  padding: 0;
  margin: 0;
  width: 50%;
  height: 100%;
  float: right;
  overflow: scroll;
  overflow-x: hidden;
}

li {
  list-style-type: none;
  background: repeating-linear-gradient(
    45deg,
    #606dbc,
    #606dbc 10px,
    #465298 10px,
    #465298 24px
  );
  width: 25em;
  height: 30rem;
  margin: 1rem auto;
  border-radius: 2rem;
  overflow: hidden;
}
.movieName {
  font-size: 2rem;
  background: linear-gradient(90deg, rgba(241,216,250,1) 0%, rgba(250,213,255,1) 40%, rgba(93,228,255,1) 100%);
  margin: 0;
  padding: 0.5rem;
  text-align: center;
  color: white;
}
.movieImage {
  height: 50%;
  position: relative;
  background-image: url('../assets/download.jpg');
  background-position: center;
  background-size: cover;
}
.movieImage > p {
  position: absolute;
  margin: 0;
  padding: 1rem;
  text-align: center;
  bottom: 0%;
}
.authorName {
  margin: 1rem;
  font-size: 1.4rem;
  text-align: center;
  color: white;
}

::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
}
</style>
