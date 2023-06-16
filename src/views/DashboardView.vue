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
          Sign Out
      </ul>
    </nav>

    
</template>


<script>

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
</style>
