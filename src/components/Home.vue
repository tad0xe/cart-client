<template>
  <div class="section">
    {{ $store.state.count }} 
    <b>filter by price</b>

   	<div class="filter float-end">
		<label><input type="radio" v-model="price" value="All" /> All</label>
    	<label><input type="radio" v-model="price" value="10" /> 10</label>
		<label><input type="radio" v-model="price" value="200" /> 200</label>

    		<label><input type="radio" v-model="price" value="300" /> 300</label>
		<label><input type="radio" v-model="price" value="500" /> 500</label>
		<label><input type="radio" v-model="price" value="1000" /> 1000</label>
	</div>
    <!-- Bar containing all sort inputs -->
  <div id="sort-bar">
    <select name="sortBy" id="select" v-model="sortBy">
      <option value="alphabetically">Alphabetically</option>
      <option value="Price">Price</option>
    </select>
    <button v-on:click="ascending = !ascending" class="sort-button">
      <i v-if="ascending" class="fa fa-sort-up"></i>
      <i v-else class="fa fa-sort-down"></i>
    </button>
  
    <input type="text" class="search" v-model="searchValue" placeholder="Search for product" id="search-input"></input>
    <i class="fa fa-search" ></i>
  </div>
    <div class="container" v-for="product in filteredRecipes" :key="product._id">
      <div class="columns" >
        <div class="column is-6">
          <div class="image is-2by2">
            <img :src="product.photo" alt="Placeholder image">
          </div>
        </div>
        <div class="column is-5 is-offset-1">
          <div class="title is-6">{{ product.title }}</div>
          <p class="title is-4 has-text-muted">$ {{ product.price }}</p>
          
          
          <p class="is-hidden-mobile">{{ product.description }}</p>
          <br>

          <p class="level">
            <router-link
              :to="`/products/${product._id}`"
              class="button is-primary"
            >View product details</router-link>
          </p>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";

export default {
  name: "Products",
  data() {
    return {
      products: [],
      name: "",
      email: "",
      ascending: true,
      sortBy: 'alphabetically',
      searchValue: '',
      price: null,
      pric:null,
    };
  },
  created() {
    //user is not authorized
  },
 
  computed: {
  filteredRecipes() {
    let tempRecipes = this.products
    
    
    // Process search input
    if (this.searchValue != '' && this.searchValue) {
        tempRecipes = tempRecipes.filter((item) => {
          return item.title
            .toUpperCase()
            .includes(this.searchValue.toUpperCase())
        })
      }
    
      // Filter out by price 
      if (this.price === "All")
      return tempRecipes;
      tempRecipes = tempRecipes.filter((item) => {
        return (item.price >= this.price)
       
      })
        if (this.price)
      tempRecipes = tempRecipes.filter((item) => {
        return (item.price <= this.price)
       
      })

           
    // Sort by alphabetical order
        tempRecipes = tempRecipes.sort((a, b) => {
            if (this.sortBy == 'alphabetically') {
                let fa = a.title.toLowerCase(), fb = b.title.toLowerCase()
          
              if (fa < fb) {
                return -1
              }
              if (fa > fb) {
                return 1 
              }
              return 0
              
              // Sort by cooking time
            } else if (this.sortBy == 'title') {
              return a.title - b.title
        }
        })
        
        // Show sorted array in descending or ascending order
        if (!this.ascending) {
        	tempRecipes.reverse()
        }
        
        return tempRecipes
  }
  },
  mounted() {
    axios.get("https://taad.herokuapp.com/api/products").then(res => {
      console.log(res);

      this.products = res.data.products;
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
.card {
  border-radius: 10px;
}
.br {
  border-radius: 7px;
}
.search{
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
}
</style>
