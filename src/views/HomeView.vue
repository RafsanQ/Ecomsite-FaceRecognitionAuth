<script setup>

</script>

<template>
    <nav>
      <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
      </ul>
      <div class="logo">
          <img src=""/>
      </div>
      <ul>

          <button @click="handleLogin">Sign in</button>

          <button><RouterLink :to="{name: 'RegisterRoute'}">Register</RouterLink></button>
      </ul>
    </nav>

    
</template>


<script>
  export default {
    data() {
          return {

          }
    },
    methods: {
      handleLogin() {
        this.$router.push({name: 'DashboardRoute', params: {username: 'rafsan', email: 'rafsan.quayes@gnaul.com'}})
        
      } 

    }
  }
</script>
  
<style scoped>
* {
  margin: 0; padding: 0; }

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}

.logo img {
  width: 200px; }

nav > ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
}

nav > ul > li {
    margin: 0 1rem;
}

nav > ul > button {
  border: none;
  color: eee;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 0 1rem

}


</style>
