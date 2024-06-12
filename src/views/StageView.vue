<template>
    <div class=" ">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
      <div class="py-8 border-b mb-8">
        <h1 class="text-2xl font-bold">L'augmentation des données d'images</h1>
      </div>
  
      <div class="space-y-8">
        <div class=" border rounded-lg shadow-md p-6 bg-white">
          <h2 class="text-xl font-semibold mb-4">Qu'est-ce que l'augmentation des images :</h2>
          <p>- L'augmentation des images, c'est simplement le fait d'obtenir de nouvelles images grâce à des images existantes.</p>
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
            <li>
              <a href="#" class="text-blue-600 underline dark:text-blue-500 hover:no-underline" data-popover-target="popover-rota">Rotation</a>
              <div data-popover id="popover-rota" role="tooltip" class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-96 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
                <img src="@/assets/CatRotation.gif" class="rounded-3xl" alt="Rotation example" />
              </div>
            </li>
            <li>Translation</li>
            <li>
              <a href="#" class="text-blue-600 underline dark:text-blue-500 hover:no-underline" data-popover-target="popover-zoom">Zoom</a>
              <div data-popover id="popover-zoom" role="tooltip" class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-96 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
                <img src="@/assets/CatZoom.gif" class="rounded-3xl" alt="Zoom example" />
              </div>
            </li>
            <li>
              <a href="#" class="text-blue-600 underline dark:text-blue-500 hover:no-underline" data-popover-target="popover-flip">Flipping</a>
              <div data-popover id="popover-flip" role="tooltip" class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-96 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
                <img src="@/assets/Normaltoflip.png" class="rounded-3xl" alt="Flipping example" />
              </div>
            </li>
            <li>
              <a href="#" class="text-blue-600 underline dark:text-blue-500 hover:no-underline" data-popover-target="popover-noise">Ajout de bruit</a>
              <div data-popover id="popover-noise" role="tooltip" class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-96 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
                <img src="@/assets/NormaltoNoise.png" class="rounded-3xl" alt="Ajout de bruit example" />
              </div>
            </li>
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
          <p>Tout d'abord, j'ai cherché une bibliothèque d'augmentation d'image efficace, rapide et simple d'utilisation.</p>
          <p>J'ai découvert plusieurs bibliothèques existantes :</p>
          <ul class="list-disc list-inside ml-4 space-y-2">
            <li>Augmentor</li>
            <li>Albumentations</li>
            <li>ImgAug</li>
            <li>Transforms</li>
            <li>Keras</li>
          </ul>
          <p>Mon choix a été principalement guidé par la simplification de l'utilisation de la bibliothèque.</p>
          <p>Mes choix se sont portés sur Albumentations et Keras, pour deux raisons différentes et deux cas précis :</p>
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
  
  <style scoped>
  
  </style>
  