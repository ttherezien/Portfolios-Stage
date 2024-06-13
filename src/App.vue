

<template>
  <div id="app">
    <NavBar />
    <router-view class="mx-5 md:mx-32 mb-24" />
  </div>
</template>


<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>



<style>
:root {
  --vert-fonce: #18534F;
  --vert-clair: #226D68;
  --blanc: #ECF8F6;
  --jaune: #FEEAA1;
  --marron: #D6955B;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

</style>
