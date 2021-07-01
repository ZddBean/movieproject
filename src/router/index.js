import Vue from "vue";
import Router from "vue-router";
import Index from "@/modules/layout/Index";
import Movie from "@/modules/movie/Index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/movie",
      name: "Movie",
      component: Movie
    }
  ]
});
