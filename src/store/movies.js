export const state = () => ({
  movies: [],
});

export const mutations = {
  set(state, movies) {
    state.movies = movies;
  },
};
