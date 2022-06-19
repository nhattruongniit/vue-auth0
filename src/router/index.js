import Vue from 'vue';
import Router from 'vue-router';

// views
import Home from '../views/Home.vue';
import NotAuthorized from '../views/NotAuthorized.vue';
import Private from '../views/Private.vue';
import Callback from '../views/Callback.vue';
import About from '../views/About.vue';

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/private",
    name: "Private",
    component: Private
  },
  {
    path: "/login/callback",
    name: "Callback",
    component: Callback
  },
  {
    path: "/not-authorized",
    name: "NotAuthorized",
    component: NotAuthorized
  }
];

const router = new Router({
  base: '/',
  mode: 'history',
  routes
})


export default router;