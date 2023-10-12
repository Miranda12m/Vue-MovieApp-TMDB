import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

const routes = [
  {
    path: "/",
    redirect: "/movies",
  },

  {
    path: "/movies",
    name: "movies",
    component: MovieList,
  },
  {
    path: "/movies/:id",
    name: "movies.details",
    component: MovieDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
