<template>
  <div id="app">
    <!-- Nav -->
    <div class="hero-head">
      <div class="container">
        <nav class="nav">
          <div class="container">
            <div class="nav-left">
              <router-link to="/" class="nav-item" style="color:darkslategrey;">Store</router-link>
            </div>
           
           
                <router-link :to="`/cart`">
                  {{ getCartLength }}
                  <img src="../assets/cart.svg" width="30px" class alt="Placeholder image">
                </router-link>
             
          </div>
        </nav>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "app",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getCartLength"])
  }
};
</script>

