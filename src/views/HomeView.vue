<template>
    <div class="home-view">
        <h1>Bienvenue sur mon Portfolios</h1>
        <div class="container_card">
            <router-link to="/stuckwin" class="card">
                <div class="card-image"><img style="width: -webkit-fill-available; height: auto; margin:5%" src="@/assets/Stuckwin.png" alt="">
                </div>
                <div class="card-description">
                    <p class="text-title">Stuckwin</p>
                    <p class="text-body">Jeu de plateaux fait en java et en python</p>
                </div>
            </router-link>


            <router-link to="/stage" class="card">
                <div class="card-image"></div>
                <div class="card-description">
                    <p class="text-title"> Augmentation des données</p>
                    <p class="text-body">Premiere partie de mon stage de recherche sur l'augmentation des données</p>
                    
                </div>
            </router-link>

        </div>






    </div>
</template>

<script>
export default {
    name: 'HomeView',
}
</script>

<style scoped>
.card {
    height: 400px;
    width: 300px;
    position: relative;
    transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    border-radius: 16px;
    box-shadow: 0 0 20px 8px #d0d0d0;
    overflow: hidden;
    margin: 10px;
}

/*Image*/
.card-image {
    height: 100%;
    width: 100%;
    position: absolute;
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
    background: var(--vert-clair);
    background: linear-gradient(to top, var(--jaune), var(--marron));
}

/*Description */
.card-description {
    display: flex;
    position: absolute;
    gap: .5em;
    flex-direction: column;
    background-color: var(--blanc);
    color: #212121;
    height: 70%;
    bottom: 0;
    border-radius: 16px;
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
    padding: 1rem;
}

/*Text*/
.text-title {
    font-size: 1.3rem;
    font-weight: 700;
}

.text-body {
    font-size: 1rem;
    line-height: 130%;
}


/* Hover states */
.card:hover .card-description {
    transform: translateY(100%);
}

.home-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    padding: 2em;
}

.container_card {
    display: flex;
    gap: 2em;
    justify-content: center;
}

@media (max-width: 768px) {
    .container_card {
        display: flex;
        gap: 2em;
        flex-wrap: wrap;
        justify-content: center;
    }
}
</style>