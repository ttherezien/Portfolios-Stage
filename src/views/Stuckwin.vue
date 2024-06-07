<template>
    <div style="body">
        <h1>Stuckwin</h1>
        <div class="container">
            <p>Stuckwin est un jeu de société ce déroulant sur un plateau remplis d'hexagone. Chaque joueur  </p>
            <img src="../assets/Stuckwin.png" alt="logo">
        </div>

    </div>
</template>

<script>
export default {
    name: 'StuckwinGame',
}
</script>
<style scoped>

.body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    padding: 2em;
}

.container {
    display: flex;
    flex-direction: row;
    gap: 2em;
    align-items: center;
    justify-content: center;
}

@media (max-width: 768px){
    .body {
        padding: 1em;
    }
    .container{
        flex-direction: column;
        gap: 1em;
    }
    .container img{
        width: 100%;
        height: auto;
    }
}


</style>