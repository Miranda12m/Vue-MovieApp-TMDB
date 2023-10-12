<template>
  <div class="container">
    <br/><br/>
    <h2>Popular Movies</h2> 
    <hr>
    <filters @filters-applied="applyFilters"></filters>
    <br/>
    <div class="row justify-content-start lista" style="align-items: center; margin-left: 75px;">
      <div class="col-md-4" v-for="movie in filteredMovies" :key="movie.id">
        <div class="card">
          <img
            :src="getImageUrl(movie.poster_path)"
            :alt="movie.title"
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.description }}</p>
            <router-link
              :to="{ name: 'movies.details', params: { id: movie.id } }"
              class="btn custom-button">
              Details
            </router-link>
          </div>
        </div>
      </div>
      <div>
        <h4 v-if="filteredMovies.length === 0">No results</h4>
      </div>
    </div>
  </div>
  <br />
</template>

<script>
import apiClient from "@/api";
import Filters from "@/components/FilterComp.vue";

export default {
  components: {
    Filters,
  },
  data() {
    return {
      movies: [],
      filters: {
        voted: null,
        search: "",
      },
      voteAverage: [
        { id: 1, name: "Mayor a 8" },
        { id: 2, name: "Entre 8 y 6" },
        { id: 3, name: "Menor a 6" },
      ],
    };
  },
  mounted() {
    this.fetchMovies();
  },
  computed: {
    filteredMovies() {
      let filteredMovies = this.movies;

      if (this.filters.voted === 1) {
        filteredMovies = filteredMovies.filter((movie) => movie.vote_average > 8);
      } else if (this.filters.voted === 2) {
        filteredMovies = filteredMovies.filter((movie) => movie.vote_average >= 6 && movie.vote_average <= 8);
      } else if (this.filters.voted === 3) {
        filteredMovies = filteredMovies.filter((movie) => movie.vote_average < 6);
      }

      if (this.filters.search) {
        const searchTerm = this.filters.search.toLowerCase();
        filteredMovies = filteredMovies.filter((movie) =>
          movie.title.toLowerCase().includes(searchTerm)
        );
      }

      return filteredMovies;
    },
  },
  methods: {
    fetchMovies() {
      apiClient
        .get("/movie/popular")
        .then((response) => {
          this.movies = response.data.results;
          console.log(this.movies)
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
    applyFilters(filters) {
      this.filters = filters;
    },
  },
};
</script>

<style scoped>
.card {
  width: 18rem;
  margin-bottom: 20px;
}

.lista{
  min-height: 60vh;
}

.custom-button {
  display: block;
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: #41B883;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.custom-button:hover {
  background-color: #35495E;
}

.custom-button:focus {
  outline: none;
  box-shadow: none;
}
</style>
