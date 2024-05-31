<template>
  <div id="app">
    <nav >
      
      <img class="logo" src="@/assets/logoTit.jpeg" alt="Image" />
    <div class="navButton">
      <router-link to="/">Home</router-link>
      <router-link to="/about">À propos de moi </router-link>
      <router-link to="/projects">Mes projets</router-link>
      <router-link to="/stage">Mon stage</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    </nav>
    <router-view style="margin-left: 100px;margin-right: 100px;"/>
  </div>
</template>

<style>

:root{
  --vert-fonce : #18534F;
  --vert-clair : #226D68;
  --blanc : #ECF8F6;
  --jaune : #FEEAA1;
  --marron : #D6955B;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  margin-right: 200px;
  margin-left: 200px;
  display: flex;
  
  
  background-color: var(--vert-fonce);

  border-radius: 90px 30px  30px 90px;

}

.navButton{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}



.logo{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 10px;
}

nav a {
  padding: 12.5px 30px;
  text-decoration: none;
  margin-left: 5px;
  margin-right: 5px;
  border: 0;
  border-radius: 0px;
  background-color: var(--vert-fonce);
  color: var(--blanc);
  font-weight: Bold;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
}

nav a:hover {
  background-color: var(--vert-clair);
  box-shadow: 0 0 10px #faf1cf50;
  transform: scale(1.01);
}

nav a:active {
  background-color:var(--vert-clair);
  transition: all 0.25s;
  -webkit-transition: all 0.25s;
  
  border-radius: 5px;
  transform: scale(0.98);
  color: var(--blanc);

  box-shadow: inset 41px 41px 40px #1d5d58,
            inset -41px -41px 40px #277d78;

}


</style>
