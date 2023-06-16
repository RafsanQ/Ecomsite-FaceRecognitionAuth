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

          <button>Sign out</button>
          
      </ul>
    </nav>

    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-md-8 m-auto">
                    <h1 class="display-4 text-center">Welcome!</h1>
                    <p class="lead text-center">
                        This is a simple example of a full-page application.
                    </p>

                    <h2>The Username is {{ Username }} and Email is {{ email }}</h2>

                </div>
            </div>
        </div>
    </div>
    
</template>


<script>
    export default {
        data() {
            return {
                Username: '',
                email: ''
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
