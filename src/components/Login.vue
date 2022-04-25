<template>
  <div>
  
    <br>EMAIL:
    <input type="text" v-model="email">
    <br>PASSWORD:
    <input type="password" v-model="password">
    <br>
    <button @click="submit">login</button>
    <b>dont have an account</b>
        <router-link :to="`/register`" class="text-white">register</router-link>
   
  </div>
</template>
<script>
export default {
   methods: {
    
     submit() {
      return axios({
        method: "post",
        data: {
          email: this.email,
          password: this.password
        },
        url: "https://serene-fortress-98064.herokuapp.com/auth/login",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
            const token = response.data.token;
          localStorage.setItem("token", response.data.token);
         
     
         this.$router.push("/");
        })
        .catch(error => {
          const message = error.response.data.message;
         
        });
    },
    clear() {
      this.$refs.form.reset();
    }
  }
}
</script>
