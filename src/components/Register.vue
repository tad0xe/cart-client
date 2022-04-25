<template>
  <div>
    NAME:
    <input type="text" v-model="name">
    <br>EMAIL:
    <input type="text" v-model="email">
    <br>PASSWORD:
    <input type="password" v-model="password">
    <br>
    <button @click="submit">signup</button>
    {{ error }}
  </div>
</template>


<script>
import axios from "axios";
export default {
  data: () => ({
    valid: true,
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /\S+@\S+\.\S+/.test(v) || "E-mail must be valid"
    ]
  }),
  methods: {
    async submit() {
     
        return axios({
          method: "post",
          data: {
            name: this.name,
            email: this.email,
            password: this.password
          },
          url: "https://serene-fortress-98064.herokuapp.com/auth/signup",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then((res) => {
           console.log(res)
            this.$router.push({ name: "login" });
          })
          .catch(error => {
            const message = error.response.data.message;
         
          });
     
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>