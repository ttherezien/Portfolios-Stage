<template>
  <div id="app">
    <nav>
      <div class="logo-button">
        <img class="logo" src="@/assets/logoTit.jpeg" alt="Image" @click="homelink" />
        <button class="menu-button" @click="toggleMenu">☰</button>
      </div>
      <div :class="['navButton', { 'navButton--open': menuOpen }]">
        <router-link to="/">Home</router-link>
        <router-link to="/about">À propos de moi </router-link>
        <router-link to="/projects">Mes projets</router-link>
        <router-link to="/stage">Mon stage</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </nav>
    <router-view style="margin-left: 100px; margin-right: 100px;" />
  </div>
</template>


<script>

export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    homelink() {
      return this.$router.push('/');
    },
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
  text-align: center;
  color: #2c3e50;
}

nav {
  margin: 0 100px;
  display: flex;
  flex-wrap: wrap;
  background-color: var(--vert-fonce);
  border-radius: 90px 30px 30px 90px;
  padding: 10px;
  position: relative;
}

.navButton {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
  flex-wrap: wrap;
  transition: max-height 0.5s ease-out;
}

.logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 10px;
}

.menu-button {
  display: none;
  background-color: var(--vert-fonce);
  color: var(--blanc);
  border: none;
  font-size: 30px;
  margin-left: auto;
  cursor: pointer;
}

nav a {
  flex: 1 1 auto;
  max-width: fit-content;
  padding: 12.5px 15px;
  text-decoration: none;
  margin: 5px;
  border: 0;
  border-radius:5px;
  color: var(--blanc);
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

nav a:hover {
  background-color: var(--vert-clair);
  box-shadow: 0 0 5px #faf1cf50;
  border-radius: 5px;
  transform: scale(1.01);
}

nav a:active {
  background-color: var(--vert-clair);
  transition: all 0.25s;
  border-radius: 5px;
  transform: scale(0.98);
  color: var(--blanc);
  box-shadow: inset 41px 41px 40px #1d5d58, inset -41px -41px 40px #277d78;
}

@media (max-width: 1000px){
  nav {
    margin: 0 25px;
  }
  
  .navButton a {
    margin: 5px 0;
    width: 80%;
    text-align: center;
    
  }
  .logo {
    width: 50px;
    height: 50px;
  }
  
}

@media (max-width: 768px) {

  .logo-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  nav {
    margin: 0 50px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .navButton {
    max-height: 0;
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    opacity: 0;
  }

  .navButton--open {
    max-height: 500px;
    transition: all 0.5s ease-in-out;
    

    opacity: 1;

    
  }

  nav a {
    margin: 5px 0;
    width: 90%;
    text-align: center;
  }

  .logo {
    width: 60px;
    height: 60px;
  }

  .menu-button {
    display: block;
  }
}

@media (max-width: 480px) {
  nav {
    margin: 0 20px;
    padding: 5px;
  }

  .logo {
    width: 50px;
    height: 50px;
  }

  nav a {
    padding: 8px 20px;
    margin: 3px 0;
  }
}
</style>
