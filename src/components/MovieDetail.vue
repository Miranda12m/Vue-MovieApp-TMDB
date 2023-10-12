<template>
  <div class="container">
  <h2>Movie Details:</h2>
  <div class="row">
    <div class="col-md-6">
      <div v-if="selectedMovie">
        <h3>{{ selectedMovie.title }}</h3>
        <img :src="getImageUrl(selectedMovie.poster_path)" :alt="selectedMovie.title" />
      </div>
      <div v-else>
        <p>Loading movie detail...</p>
      </div>
    </div>
    <div class="col-md-6">
      <br>
      <br>
      <div v-if="selectedMovie">
        <h4>{{ selectedMovie.overview }}</h4>
        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, ducimus laborum natus cumque sint voluptas quae in dolorum incidunt velit delectus corporis possimus voluptatem saepe aperiam nihil quisquam veniam repudiandae!</h4>
        <p>{{ selectedMovie.description }}</p>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import apiClient from "@/api";

export default {
  data() {
    return {
      selectedMovie: null,
    };
  },
  created() {
    this.fetchMovieById();
  },
  methods: {
    fetchMovieById() {
      const id = this.$route.params.id;
      apiClient
        .get(`/movie/${id}`)
        .then((response) => {
          this.selectedMovie = response.data;
          console.log(this.selectedMovie)
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getImageUrl(path) {
      if (path) {
        return `https://image.tmdb.org/t/p/w500/${path}`;
      }
      return "";
    },
  },
};
</script>

<style scoped>
/* Container styles provided by CHATGPT... */

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
}

/* Row and column styles */

.row {
  display: flex;
  flex-wrap: wrap;
}

.col-md-6 {
  width: 50%;
  padding: 10px;
}

/* Image styles */

img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
}

/* Text styles */

h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

h4 {
  font-size: 18px;
  margin-bottom: 10px;
}

p {
  font-size: 14px;
  line-height: 1.5;
}

</style>