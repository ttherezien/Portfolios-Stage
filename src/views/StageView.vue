<template>
    <div class=" ">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
        <div class="py-8 border-b mb-8">
            <h1 class="text-2xl font-bold">L'augmentation des données d'images</h1>
        </div>

        <div class="space-y-8">
            <div class=" border rounded-lg shadow-md p-6 bg-white">
                <h2 class="text-xl font-semibold mb-4">Qu'est-ce que l'augmentation des images :</h2>
                <p>- L'augmentation des images, c'est simplement le fait d'obtenir de nouvelles images grâce à des
                    images existantes.</p>
            </div>

            <div class="py-8 border rounded-lg shadow-md p-6 bg-white">
                <h2 class="text-xl font-semibold mb-4">Pourquoi augmenter les images :</h2>
                <p>Pour plusieurs raisons :</p>
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

            <div class="py-8 border rounded-lg shadow-md p-6 bg-white">
                <h2 class="text-xl font-semibold mb-4">Les solutions que j'ai mises en place :</h2>
                <p>Tout d'abord, j'ai cherché une bibliothèque d'augmentation d'image efficace, rapide et simple
                    d'utilisation.</p>
                <p>J'ai découvert plusieurs bibliothèques existantes :</p>
                <ul class="list-disc list-inside ml-4 space-y-2">
                    <li>Augmentor</li>
                    <li>Albumentations</li>
                    <li>ImgAug</li>
                    <li>Transforms</li>
                    <li>Keras</li>
                </ul>
                <p>Mon choix a été principalement guidé par la simplification de l'utilisation de la bibliothèque.</p>
                <p>Mes choix se sont portés sur Albumentations et Keras, pour deux raisons différentes et deux cas
                    précis :</p>
                <ul class="list-disc list-inside ml-4 space-y-2">
                    <li>Albumentations : pour l'augmentation des images de mon dataset</li>
                    <li>Keras : pour l'augmentation des images en temps réel</li>
                </ul>
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