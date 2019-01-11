<template>
  <div id="movieTab">
      <ul>
          <li v-for="items in GetItem" @click="moreDescript(items.comment)">
            <p class='movieName'>{{items.name}}</p>
            <div class='movieImage'  v-bind:style="{ 'background-image': 'url(' + getImage(items.name) + ')' }">
              <p class='typeGenre'>{{items.genre}}</p>
            </div>
            <p class='rating'>{{items.rating}}</p>
            <p class='description'>{{items.comment.substring(0,20) + "..."}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
import ThreeD from './3D.vue';
export default {
  name:'MovieTab',
  data () {
    return {
        GetItem: [],
    }
  },
  created () {
    this.$http.get('https://ipezpsmb8i.execute-api.us-west-2.amazonaws.com/dev/get').then(function(data){
      let tempData = JSON.parse(data.data.body); //parses it to Objects as its just string in an object
      this.GetItem = tempData.message.rows;
    });
  },
  methods: {
    getImage: function(movie) {
      this.$http.get(`https://api.themoviedb.org/3/search/movie?api_key=076e31b5f5be3a58bbd0c13a5cd7b901&language=en-US&query=${movie}&page=1&include_adult=false`).then(function(data){
        console.log(data);
        if(data.body.results.length !== 0) {
          let temp = data.body.results[0].poster_path;
          return `https://image.tmdb.org/t/p/w500/${temp}`;
        }
      });
    },
    moreDescript: function(event) {

    }
  }
}
//link to get images https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
</script>

<style lang="scss" scoped>
#movieTab {
  height: 100%;
  width: 50%;
}
ul {
  display: inline-block;
  padding: 0;
  margin: 0;
  width: 100%;
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
  margin: 2rem auto;
  border-radius: 2rem;
  overflow: hidden;
}
li > p {
  text-align: center;
}
li:nth-child(odd) {
  transform: rotate(3deg);
}
li:nth-child(even) {
  transform: rotate(-3deg);
  background: repeating-linear-gradient(45deg, #63bc60, #63bc60 10px, #3b9022 10px, #3b9022 24px);
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
  background-position: center;
  background-size: cover;
}
.movieImage > p {
    width: 100%;
    position: absolute;
    margin: 0;
    padding: 0.5rem 0;
    text-align: center;
    bottom: 0%;
    background: rgba(0,0,0,0.5);
}
.authorName {
  margin: 1rem;
  font-size: 1.4rem;
  text-align: center;
  color: white;
}
</style>