<template>
    <div>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
        <div class="py-8 border-b mb-8 ">
            <h1 class="text-2xl font-bold">L'augmentation des données d'images</h1>
        </div>
        <div class="grid grid-cols-1 gap-1 grid-flow md:grid-cols-2 md:gap-4">

            <div class="py-8 border rounded-lg shadow-md p-6 bg-white">
                <h2 class="text-xl font-semibold mb-4">Qu'est-ce que l'augmentation des images :</h2>
                <p>L'augmentation des images, c'est simplement le fait d'obtenir de nouvelles images grâce à des
                    images existantes.</p>
            </div>

            <div class="py-8 border rounded-lg shadow-md p-6 bg-white">
                <h2 class="text-xl font-semibold mb-4">Pourquoi augmenter les images :</h2>
                <ul class="list-disc list-inside ml-4">
                    <li>Pour augmenter la taille de notre dataset</li>
                    <li>Pour améliorer la performance de notre modèle</li>
                    <li>Pour éviter le surapprentissage</li>
                </ul>
            </div>

            <div class="py-8 border rounded-lg shadow-md p-6 bg-white">
                <h2 class="text-xl font-semibold mb-4">Comment augmenter les images :</h2>
                <p>Il existe plusieurs méthodes pour augmenter les images :</p>
                <h3 class="text-lg font-semibold mt-4">Les méthodes basiques :</h3>
                <ul class="list-disc list-inside ml-4 space-y-2">

                    <li>Rotation</li>
                    <li>Translation</li>
                    <li>Zoom</li>
                    <li>Flipping</li>
                    <li>Ajout de bruit</li>
                    <li>Changement de luminosité</li>
                    <li>Changement de contraste</li>

                </ul>
                <h3 class="text-lg font-semibold mt-4">Les méthodes avancées :</h3>
                <ul class="list-disc list-inside ml-4 space-y-2">
                    <li>GAN</li>
                    <li>Style transfer</li>
                    <li>CycleGAN</li>
                </ul>
            </div>

            <div class=" grid grid-cols-2 py-8 border rounded-lg shadow-md p-6 bg-white">
                <img src="@/assets/CatRotation.gif" alt="">
                <img src="@/assets/CatZoom.gif" alt="">
                <img src="@/assets/Normaltoflip.png" alt="">
                <img src="@/assets/NormaltoNoise.png" alt="">
            </div>

            <div class="py-8 border rounded-lg shadow-md p-6 bg-white">
                <h2 class="text-xl font-bold mb-4">Bibliothèques d'Augmentation d'Image</h2>
                <p class="font-semibold">Voici quelques-unes des bibliothèques les plus populaires :</p>
                <ul class="py-2 list-disc list-inside ml-4 ">
                    <li>Augmentor</li>
                    <li>Albumentations</li>
                    <li>ImgAug</li>
                    <li>Transforms</li>
                    <li>Keras</li>
                </ul>
                <p>Pour simplifier l'utilisation, j'ai choisi deux bibliothèques en particulier, chacune adaptée à un
                    cas d'usage spécifique.</p>
                <h2 class="pt-6 text-xl font-semibold mb-4">Mes choix se sont portés sur Albumentations et Keras, pour
                    deux raisons différentes et deux cas
                    précis :</h2>
                <p>Albumentations est reconnue pour sa flexibilité et sa vitesse. Elle propose une large gamme de
                    transformations qui peuvent être facilement appliquées à un dataset entier. Voici pourquoi
                    Albumentations est un excellent choix pour l'augmentation des images de votre dataset :</p>

                <ul class="py-2 list-disc list-inside ml-4 ">
                    <li><b>Richesse des transformations :</b> Rotation, découpage, ajustement de la luminosité et du
                        contraste, flou, etc.</li>
                    <li><b>Performance :</b> Conçue pour être rapide et efficace, même avec des datasets volumineux.
                    </li>
                    <li><b>Simplicité :</b> Facile à intégrer dans des pipelines de pré-traitement existants.</li>
                </ul>

                <h2 class="pt-6 text-xl font-semibold mb-4">Keras : Pour l'Augmentation des Images en Temps Réel
                </h2>
                <p>Keras, avec son API intuitive, offre des fonctionnalités d'augmentation d'image en temps réel, idéal
                    pour le traitement des images lors de l'entraînement des modèles. Les avantages de Keras incluent :
                </p>
                <ul class="py-2 list-disc list-inside ml-4 ">
                    <li><b>Intégration fluide :</b> S'intègre parfaitement avec les modèles Keras pour augmenter les
                        images à la volée pendant l'entraînement.</li>
                    <li><b>Transformations variées :</b> Inclut des transformations communes comme la rotation, le zoom,
                        le retournement, etc.</li>
                    <li><b>Facilité d'utilisation :</b> Grâce à son API conviviale, vous pouvez rapidement mettre en
                        place l'augmentation d'image dans votre workflow d'entraînement.</li>

                </ul>




            </div>
            <div class="  py-8 border rounded-lg shadow-md p-6 bg-white">
                <h2 class="text-xl font-semibold mb-4">La Difference entre le DAP et le DAT</h2>

                <p class="pt-2">Le <b>Data Augmentation during Preprocessing (DAP)</b> et le <b>Data Augmentation during Training
                        (DAT)</b> sont
                    deux techniques utilisées pour améliorer les performances des modèles de machine learning en
                    augmentant la diversité des données d'entraînement.
                </p>
                <p class="pt-2">
                    Le <b>DAP</b> consiste à appliquer des transformations aux images avant le début de l'entraînement. Les
                    images augmentées sont stockées et prêtes à être utilisées pour entraîner le modèle. Cette méthode
                    permet de vérifier et valider les images augmentées avant l'entraînement, mais peut nécessiter un
                    espace de stockage supplémentaire.
                </p>
                <img src="@/assets/DAP.png" class="w-auto" alt="">
                <p class="pt-2">
                    Le <b>DAT</b>, en revanche, applique les transformations en temps réel pendant le processus d'entraînement.
                    Les images sont augmentées dynamiquement à chaque époque, introduisant une variabilité continue qui
                    peut améliorer la généralisation du modèle. Cette approche est plus exigeante en termes de mémoire
                    et de puissance de calcul, mais elle n'augmente pas les besoins en stockage et permet une
                    augmentation continue et variée des données.
                </p>


                <img src="@/assets/DAT.png" class="w-auto" alt="">
                
            </div>




        </div>
    </div>
</template>

<script>
import 'flowbite';
import { Popover } from 'flowbite';

export default {
    name: 'StageView',
    mounted() {
        Popover.init();
    },
};
</script>

<style scoped></style>