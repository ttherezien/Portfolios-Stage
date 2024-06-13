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
        </div>

        <div class="py-8 border-b mb-8 ">
            <h1 class="text-2xl font-bold">Methode Classique</h1>
        </div>
        <div class="grid grid-cols-1 gap-1 grid-flow md:grid-cols-2 md:gap-4 ">

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

                <p class="pt-2">Le <b>Data Augmentation during Preprocessing (DAP)</b> et le <b>Data Augmentation during
                        Training
                        (DAT)</b> sont
                    deux techniques utilisées pour améliorer les performances des modèles de machine learning en
                    augmentant la diversité des données d'entraînement.
                </p>
                <p class="pt-2">
                    Le <b>DAP</b> consiste à appliquer des transformations aux images avant le début de l'entraînement.
                    Les
                    images augmentées sont stockées et prêtes à être utilisées pour entraîner le modèle. Cette méthode
                    permet de vérifier et valider les images augmentées avant l'entraînement, mais peut nécessiter un
                    espace de stockage supplémentaire.
                </p>
                <img src="@/assets/DAP.png" class="w-auto" alt="">
                <p class="pt-2">
                    Le <b>DAT</b>, en revanche, applique les transformations en temps réel pendant le processus
                    d'entraînement.
                    Les images sont augmentées dynamiquement à chaque époque, introduisant une variabilité continue qui
                    peut améliorer la généralisation du modèle. Cette approche est plus exigeante en termes de mémoire
                    et de puissance de calcul, mais elle n'augmente pas les besoins en stockage et permet une
                    augmentation continue et variée des données.
                </p>


                <img src="@/assets/DAT.png" class="w-auto" alt="">

            </div>
        </div>

        <div class="py-8 border-b mb-8 ">
            <h1 class="text-2xl font-bold">Le CycleGAN</h1>
        </div>
        <div class="grid grid-cols-1 gap-1 grid-flow md:grid-cols-2 md:gap-4">
            <div class="py-8 border rounded-lg shadow-md p-6 bg-white">
                <h2 class="text-xl font-semibold mb-4">Qu'est-ce que le CycleGAN :</h2>
                <p>Le <b>CycleGAN</b> est un modèle de <b>deep learning</b> qui permet de réaliser des
                    <b>transformations d'images</b>
                    d'un domaine à un autre sans nécessiter de <b>données appariées</b>. Il est basé sur l'architecture
                    des <b>GAN
                        (Generative Adversarial Networks)</b> et utilise un ensemble de <b>deux générateurs</b> et
                    <b>deux discriminateurs</b>
                    pour apprendre à transformer des images d'un domaine à un autre.
                </p>

                <img src="@/assets/CycleGAN.jpg" class="w-auto" alt="">

            </div>

            <div class="py-8 border rounded-lg shadow-md p-6 bg-white">
                <h2 class="text-xl font-semibold mb-4">Pourquoi le CycleGAN</h2>
                <p>Après la lecture du papier de recherche
                    <a class="underline hover:no-underline font-semibold" href="https://arxiv.org/abs/2403.10075"
                        target="_blank">"A survey of synthetic
                        data augmentation methods in computer vision" </a>
                    de <a href="https://arxiv.org/search/cs?searchtype=author&query=Mumuni,+A" class="hover:underline"
                        target="_blank">Alhassan Mumuni</a>,
                    <a href="https://arxiv.org/search/cs?searchtype=author&query=Mumuni,+F" class="hover:underline"
                        target="_blank">Fuseini Mumuni</a>,
                    <a href="https://arxiv.org/search/cs?searchtype=author&query=Gerrar,+N+K" class="hover:underline "
                        target="_blank">Nana Kobina Gerrar</a>
                    qui présente une revue des méthodes d'augmentation de données synthétiques en vision par ordinateur,
                    j'ai fait un choix par rapport à nos compétence et à la simplicité de mise en place
                </p>
                <p class="pt-2"> Parmi les solutions que nous avons écartées, plusieurs nécessitaient l'utilisation de
                    moteurs
                    graphiques tels qu'Unreal Engine ou Unity. Ces technologies demandent des compétences spécifiques
                    que nous ne possédons pas actuellement au sein du laboratoire. </p>

                <p class="pt-2"> De plus, le Cycle GAN est très simple à utiliser, et sa structure, étant relativement
                    ancienne, bénéficie d'une abondance d'exemples et de tutoriels. Cela facilite grandement sa mise en
                    place. </p>

            </div>

            <div class="py-8 border rounded-lg shadow-md p-6 bg-white">

                <h2 class="text-xl font-semibold mb-4">Objectif : </h2>
                <p class="py-2">
                    Notre objectif est de pouvoir entrainer un Cycle GAN avec des images de panneaux solaires, de deux
                    catégorie differentes :


                </p>
                <ul class="list-disc list-inside ml-4 ">
                    <li>Les panneaux solaires en bon état</li>
                    <li>Les panneaux solaires avec des fractures physiques </li>
                </ul>

                <p class="py-2">
                    Le Cycle GAN devra être capable de transformer des images de panneaux solaires en bon état en images
                    de panneaux solaires avec des fractures physiques, et vice versa. Cela nous permettra de générer un
                    dataset synthétique pour entraîner nos modèles de détection de fractures sur des images de panneaux
                    solaires.
                </p>

            </div>
            <div class="py-8 border rounded-lg shadow-md p-6 bg-white">

                <h2 class="text-xl font-semibold mb-4">Resultat : </h2>
                <p class="py-2">
                    Nous avons réussi à entraîner un Cycle GAN sur un dataset de panneaux solaires en bon état et de
                    panneaux solaires avec des fractures physiques. Voici un aperçu des résultats obtenus au bout de 60h
                    d'entrainement :
                </p>
                <img src="@/assets/CycleGANResult1.png" class="w-auto" alt="">
                <img src="@/assets/CycleGANResult2.png" class="w-auto" alt="">
                <img src="@/assets/CycleGANResult3.png" class="w-auto" alt="">
                <p class="py-2">
                    Les images générées par le Cycle GAN sont convaincantes et montrent des résultats prometteurs.
                    Cependant, elles ne sont pas encore suffisamment réalistes pour être utilisées dans un contexte de
                    production. La suite du travail consisterais à améliorer la qualité des images générées par le
                    Cycle GAN soit en utilisant un dataset plus large, soit en ajustant les hyperparamètres du modèle,
                    soit en patientant pour que le modèle s'entraine plus longtemps.
                </p>

                <p>
                    Le problème est que nous ne pouvons pas augmenter la taille du dataset en raison des contraintes
                    spécifiques au projet. De plus, ajuster les hyperparamètres et les temps d'entraînement entraînera
                    un coût de temps significatif.
                </p>

                <p>
                    C'est donc une piste très prometteuse, mais qui n'a pas encore été pleinement explorée.

                </p>
            </div>
        </div>

        <div class="py-8 border-b mb-8 ">
            <h1 class="text-2xl font-bold">Les compétences aquises lors du stage :</h1>

        </div>

        <div class="grid grid-cols-1 gap-1 grid-flow md:grid-cols-2 md:gap-4">
            <div class="py-8 border rounded-lg shadow-md p-6 bg-white">
                <h2 class="text-xl font-semibold mb-4">Développement d’applications durant mon stage</h2>

                <p class="py-2"> Pendant mon stage, j'ai réalisé plusieurs sites web et API simples :</p>
                <ul class="list-disc list-inside ml-4">
                    <li><b>Une API</b> permettant d'augmenter des images avec des méthodes de base, dotée d'une
                        interface utilisateur
                        très simple.</li>
                    <img class="py-2" src="@/assets/DataAugmentAPI.png" alt="">
                    <li><b>Un site web</b> permettant de visualiser facilement les scores de similarité entre images
                        (pour détecter par
                        exemple les doublons), calculés préalablement et stockés dans un fichier JSON.</li>
                    <li>Une tentative de mise en place d'<b>un modèle de classification</b> basé sur la similarité
                        syntaxique.</li>
                </ul>

                <p class="py-2"> J'ai acquis de l'expérience avec des outils comme <b>Flask, TensorFlow, Keras</b> et
                    <b>Albumentations</b> en Python.
                    Sans cahier des charges précis, j'ai pu adopter une approche flexible pour le développement et la
                    création
                    d'outils. Ces derniers m'ont permis d'améliorer la visualisation des résultats de mes modèles. Leur
                    simplicité,
                    conception et ergonomie les rendent accessibles.
                </p>

                <p class="py-2"> Cependant, ces outils étant destinés à un usage personnel, ils manquent d'ergonomie et
                    n'ont pas été
                    testés rigoureusement. Leur développement, généralement réalisé en deux jours maximum, ne les
                    préparait pas à
                    une utilisation à long terme en cas de modifications de fichiers.</p>
            </div>


            <div class="py-8 border rounded-lg shadow-md p-6 bg-white">
                <h2 class="text-xl font-semibold mb-4">Gestion des données d'information</h2>

                <p class="py-2"> Mon rôle durant mon stage incluait la gestion des données d'information, principalement
                    axée sur des données photographiques. Contrairement aux bases de données relationnelles
                    traditionnelles, mon travail ne nécessitait pas leur mise en place initiale.</p>

                <p class="py-2"> En revanche, j'ai consacré une partie significative de mon temps à la préparation des
                    données pour l'entraînement des modèles. Cela comprenait le nettoyage, la transformation et
                    l'organisation des données afin de les rendre utilisables par les algorithmes d'apprentissage
                    automatique. De plus, j'ai été chargé du stockage efficace et de la visualisation claire des
                    résultats produits par ces modèles.</p>

                <p class="py-2"> Un autre aspect crucial de mon travail était le tri des images. Ce processus, souvent
                    fastidieux, a été simplifié par l'utilisation de méthodes de calcul de la similarité entre images.
                    Cela m'a permis d'automatiser une partie du processus de tri et d'identifier rapidement les images
                    similaires ou potentiellement redondantes.</p>


                <p class="py-2"> Pour cela, j'ai utilisé plusieurs formats de stockage comme JSON et CSV. J'ai manipulé
                    ces formats en utilisant des bibliothèques populaires en Python telles que <b>json</b>,
                    <b>pandas</b> pour CSV, et <b>numpy</b> pour le traitement numérique des données. Ces
                    outils m'ont permis de naviguer efficacement à travers les données, de les préparer pour
                    l'entraînement des modèles et de les utiliser dans diverses applications.</p>

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