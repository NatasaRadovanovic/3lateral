import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
import Careers from "../views/Careers.vue";
import News from "../views/News.vue";
import Article from "../views/Article.vue";
import Projects from "../views/Projects.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/services",
    name: "Services",
    component: Services
  },
  {
    path: "/careers",
    name: "Careers",
    component: Careers
  },
  {
    path: "/news",
    name: "News",
    component: News
  },
  {
    path: "/news/:id",
    name: "Article",
    component: Article
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/About",
    name: "About",
    component: About
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function() {
  //     return import(/* webpackChunkName: "about" */ "../views/About.vue");
  //   }
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
