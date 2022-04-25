<template>
  <div class>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <div class="card">
          <div class="card-image">
            <figure class="image is-2by2">
              <img :src="product.photo" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left"></div>
              <div class="media-content">
                <p class="title is-4">{{ product.title }}</p>
                <br>
                <p class="subtitle is-6">$ {{ product.price }}</p>
                <p></p>
                <div class="content">{{product.description}}</div>
              </div>
              <div class>
                <button class="button is-dark" @click="addProductToCart(product)">Add to cart</button>
              </div>
            </div>
            <div>
              <p></p>
              <br>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
  name: "Product",
  components: {},
  data() {
    return {
      product: []
    };
  },
  mounted() {
    axios
      .get(`https://taad.herokuapp.com/api/products/${this.$route.params.id}`, {})
      .then(response => {
        console.log(response);
        this.product = response.data.product;
      })
      .catch(error => {
        error;
      });
  },

  methods: {
    ...mapActions(["addProductToCart"]),
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    }
  }
};
</script>

<style>
.br {
  border-radius: 7px;
}
</style>
