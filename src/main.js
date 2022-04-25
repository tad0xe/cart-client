require("./bootstrap");

import Vue from "vue";
import store from "./store";
import VueRouter from "vue-router";
import App from "./components/App.vue";
import Home from "./components/Home.vue";
import Product from "./components/Product.vue";
import Dummy from "./components/Dummy.vue";

import Order from "./components/Order.vue";
import Cart from "./components/Cart.vue";

import Complete from "./components/Complete.vue";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";

// Register components and services
Vue.use(VueRouter);

// Register routes
const routes = [
  { name: "home", path: "/", component: Home },
  { name: "order", path: "/order", component: Order },
  { name: "login", path: "/login", component: Login },
  { name: "register", path: "/register", component: Register },
  { name: "cart", path: "/cart", component: Cart },
  { name: "order-complete", path: "/order-complete/:id", component: Complete },
  { name: "dummy", path: "/dummy", component: Dummy },
  {
    path: "/products/:id",
    name: "Product",
    component: Product
  }
];

const router = new VueRouter({
  mode: "history",
  routes,

});

// instantiate everything to DOM
new Vue({
  router,
  store,
  el: "#app",
  data() {
    return {
      order_details: {}
    };
  },
  render: h => h(App)
});
