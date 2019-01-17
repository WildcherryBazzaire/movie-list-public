<template>
  <div id="movieTab">
      <ul>
          <li v-for="(items,index) in GetItem" @click="moreDescript(items.comment)">
            <p class='movieName'>{{items.name}}</p>
            <div class='movieImage'  v-bind:style="{ 'background-image': 'url(' + getUrl[index] + ')' }">
              <rating-score :rating="items.rating"></rating-score> <!-- rating score component -->
            </div>
            <p>{{getDate[index]}}</p>
            <p class='description'>{{items.comment.substring(0,30) + "..."}}</p> <!-- substring so strings arent that lo...-->
          </li>
      </ul>
  </div>
</template>

<script>
import Rating from './rating.vue';
export default {
  name:'MovieTab',
  components: {
    'rating-score': Rating
  },
  data () {
    return {
        GetItem: [], //Gets items from the Postgres Database
        getUrl: [], //Gets the url for the posters from the movie API and stores them in here
        getDate: [] //gets the dates as well with the images
    }
  },
  created () {
    this.$http.get('https://ipezpsmb8i.execute-api.us-west-2.amazonaws.com/dev/get').then(function(data){
      let tempData = JSON.parse(data.data.body); //parses it to Objects as its just string in an object
      this.GetItem = tempData.message.rows;
      // this.GetItem.map( (item) => {
      //   this.getSrc(item.name);
      // });
      this.GetItem.forEach(element => {
        this.getSrc(element.name);
      });
      console.log(this.GetItem);
      console.log(this.getUrl);
    });
  },
 
  methods: {
    getSrc: function(movie) {
      this.$http.get(`https://api.themoviedb.org/3/search/movie?api_key=076e31b5f5be3a58bbd0c13a5cd7b901&language=en-US&query=${movie}&page=1&include_adult=false`).then(function(data){
        if(data.body.results.length !== 0){
          console.log(data.body.results);
          let tempPoster = data.body.results[0].poster_path;
          let url = `https://image.tmdb.org/t/p/w500${tempPoster}`;
          let tempDate = data.body.results[0].release_date;

          this.getUrl.push(url);
          this.getDate.push(tempDate);
        } else {
          this.getUrl.push('./src/assets/images/missing.jpg');
          this.getDate.push('????-??-??')
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
  width: 100%;
}
ul {
  display: inline-block;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  float: right;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
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
  transition: all 1s ease;
}
li > p {
  text-align: center;
  font-size: 1.5rem;
 

}
li:nth-child(odd) {
  transform: rotate(3deg);
}
li:nth-child(even) {
  transform: rotate(-3deg);
  background: repeating-linear-gradient(45deg, #63bc60, #63bc60 10px, #3b9022 10px, #3b9022 24px);
}
li:hover {
  box-shadow: 2px 8px 45px rgba(71, 71, 71, 0.493);
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