<template>
  <div>
    <div class="is-pulled-right">
      <button class="button is-dark">
        <router-link to="/order" class="nav-item" style="color:darkslategrey; color:white;">Proceed to checkout</router-link>
      </button>
      <br>
      <span class>Subtotal ({{getCartLength}} item)</span>
      <span class>
        <!-- Cart Total Price -->
        <span class>${{ getCartTotalPrice }}</span>
      </span>
    </div>
    <div>
      <div class v-for="product in getCart" :key="product._id" style="padding-top:8%;">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <div class="card">
              <div class="card-image">
                <figure class="image is-3by3">
                  <img :src="product.photo" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left"></div>
                  <div class="media-content">
                    <p class="title is-4">{{ product.title }}</p>
                    <br>
                    <p class="subtitle is-6"></p>
                    <p class>
                      <span class>${{ product.price * product.quantity}}</span>
                    </p>

                    <div class="content">
                      <div>
                        <select @change="onChangeQuantity($event, product)">
                          <option v-for="i in 10" :key="i" :value="i">Qty: &nbsp;{{i}}</option>
                        </select>
                        &nbsp;&nbsp;
                        <span>|</span>
                        &nbsp;
                        <!-- Delete button -->
                        <span class>
                          <a href="#" @click="$store.commit('removeProduct', product)">Delete</a>
                        </span>
                        &nbsp;
                        &nbsp;
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <br>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCart", "getCartTotalPrice", "getCartLength"])
  },
  methods: {
    onChangeQuantity(event, product) {
      let qty = parseInt(event.target.value);
      this.$store.commit("changeQty", { product, qty });
    }
  }
};
</script>