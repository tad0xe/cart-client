import Vuex from 'vuex';
import Vue from 'vue';
import cart from './modules/cart';
import createPersistedState from "vuex-persistedstate";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    plugins: [createPersistedState()],
  modules: {

    cart
  }
});
