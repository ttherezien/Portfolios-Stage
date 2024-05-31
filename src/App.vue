<template>
  <div id="app">
    <nav>
      <img class="logo" src="@/assets/logoTit.jpeg" alt="Image" />
      <router-link to="/">Home</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #6195c9;
}

nav a {
  font-weight: bold;
  color: #0097D6;
}

nav a.router-link-exact-active {
  color: #AFCA51;
}

.logo{
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin: 10px;
}

</style>
