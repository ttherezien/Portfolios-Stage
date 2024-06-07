<template>
    <div>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
        <div class="py-8 border ">
            <p>L'augmentation des données d'images </p>
        </div>


        <div>
            <div class="py-8 border ">
                <p>Qu'est ce que l'augmentation des images : </p>
                <p> - l'augmentation des images c'est simplement le faite d'obtenir de nouvelle images grace a des
                    images
                    existantes
                </p>
            </div>

            <div class="py-8  border ">
                <p>Pourquoi augmenter les images :</p>
                <p> Pour plusieurs raison :
                <ul>
                    <li> - Pour augmenter la taille de notre dataset</li>
                    <li> - Pour améliorer la performance de notre modèle</li>
                    <li> - Pour éviter le surapprentissage</li>
                </ul>
                </p>
            </div>

            <div class="py-8 border">
                <p>Comment augmenter les images :</p>
                <p> Il existe plusieurs méthode pour augmenter les images :
                <ul>les methodes basique
                    <li ><a href="#" data-popover-target="popover-rota"> - Rotation </a></li>
                    <div data-popover id="popover-rota" role="tooltip"
                        class="absolute z-10 invisible inline-block transition-opacity duration-300 ">
                        <img class="rounded-3xl" src="@/assets/CatRotation.gif" alt=""></div>



                    <li> - Translation</li>

                    <li> - Zoom</li>
                    <img class="rounded-3xl" src="@/assets/CatZoom.gif" alt="">
                    <li> - Flipping</li>
                    <img class="rounded-3xl" src="@/assets/Normaltoflip.png" alt="">
                    <li> - Ajout de bruit</li>
                    <img class="rounded-3xl" src="@/assets/Normal to noise.png" alt="">
                    <li> - Changement de luminosité</li>
                    <li> - Changement de contraste</li>
                </ul>
                <ul>les methodes avancées
                    <li> - GAN</li>
                    <li> - Style transfer</li>
                    <li> - CycleGAN</li>
                </ul>
                </p>
            </div>
        </div>







    </div>
</template>
<script>
import 'flowbite'
import { Popover } from 'flowbite'
export default {
    onMounted() {
        Popover.init()
    },
    
   
    
    name: 'StageView',
    

}
</script>
<style scoped></style>