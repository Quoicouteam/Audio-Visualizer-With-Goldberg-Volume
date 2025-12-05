# Visualiseur audio interactif – Rube Goldberg Edition

Un visualiseur audio 3D et 2D réactif développé pendant la **Nuit de l'Info**.

Cette interface s’inspire des **machines de Rube Goldberg**, c’est-à-dire des systèmes volontairement complexes pour accomplir une tâche simple. Ici, la tâche consiste à **contrôler le volume audio du système**, mais de manière ludique et visuellement captivante.

L’utilisateur peut interagir avec un **phonographe animé** :
- un **levier** qui ajuste le volume,
- un **disque rotatif** et un **bras de lecture** (toneram) qui bougent en synchronisation avec le son,
- de petits **interrupteurs et détails mécaniques** pour enrichir l’esthétique.

Chaque élément réagit au volume et aux interactions, transformant un simple contrôle audio en **expérience visuelle et tactile** inspirée des machines rétro-mécaniques.


🌐 **Accéder au site hébergé :** https://quoicouteam.github.io/Audio-Visualizer-With-Goldberg-Volume/

## Technologies Utilisées

### Frontend
- **Vue.js 3** - Framework JavaScript avec Composition API
- **Three.js** - Moteur de rendu 3D WebGL
- **Vite** - Build tool et serveur de développement

### Graphisme
- **GLSL** - Shaders personnalisés pour vertex et fragment
- **WebGL** - Rendu graphique accéléré par GPU
- **Web Audio API** - Analyse de fréquences audio en temps réel

### Shaders Implémentés

#### Mode 3D
- **Spiky** - Géométrie à spikes réagissant aux différentes bandes de fréquences
- **Wave** - Déformation sinusoïdale verticale
- **DNA Helix** - Double hélice animée
- **Liquid Metal** - Surface liquide avec vagues concentriques
- **Blooming Flower** - Pétales qui s'ouvrent et se ferment

#### Mode 2D
- **Laser** - Effet de faisceau horizontal
- **Rings** - Anneaux concentriques colorés
- **Waves** - Motifs ondulatoires avec rotation
- **Fractal** - Mandelbulb raymarched avec morphing temporel

## Fonctionnalités

### Analyse Audio
- Séparation des fréquences en bass, mid et treble
- Détection de peaks pour les beats
- Support de fichiers audio et images personnalisés

### Contrôles
- Sélection de shaders en temps réel
- Paramètres ajustables par shader (vitesse, intensité, couleurs)
- Rotation 3D avec OrbitControls
- Mode plein écran pour visualisations 2D
- Support de textures avec masque alpha

### Interaction et Volume
- Contrôle du **volume** via un **levier animé**
- **Engrenages et disques** synchronisés avec le son
- **Switches et détails mécaniques** pour enrichir l’esthétique
- **Animations réactives** aux variations de volume

### Architecture
```
# Structure du Projet

Ce projet est structuré autour des composants d'interface utilisateur (Vue) et des scripts de contrôle pour une application de visualisation et de manipulation audio/graphique.

## 📁 Arborescence du Code Source (`src/`)

src/
├── components/                 # Composants Vue (Interface Utilisateur)
│   ├── goldberg_audio/         # Composants spécifiques à la partie "Goldberg Audio"
│   │   ├── Lever.vue           # Composant de levier (interface de contrôle)
│   │   ├── Patiphon.vue        # Composant lié à l'élément "Patiphon"
│   │   ├── SevenSegmentCounter.vue # Affichage d'un compteur à sept segments
│   │   └── Spinner.vue         # Indicateur de chargement ou de rotation
│   ├── Toneram.vue             # Composant "Toneram"
│   ├── AssetUploader.vue       # Composant pour le téléchargement de ressources
│   ├── AudioControls.vue       # Contrôles pour la lecture et les paramètres audio
│   ├── AudioFileUploader.vue   # Composant pour le téléchargement de fichiers audio
│   ├── ModeSelector.vue        # Sélecteur du mode de fonctionnement de l'application
│   ├── Rotation3DControl.vue   # Contrôles pour la rotation des éléments 3D
│   ├── ShaderParamsControl.vue # Contrôles des paramètres (uniformes) des shaders
│   ├── ShaderSelector.vue      # Sélecteur pour choisir le shader actif
│   ├── TestComponent.vue       # Composant utilisé pour des tests ou débogage
│   └── VisualizerControls.vue  # Contrôles généraux de la visualisation
├── scripts/                    # Logique Applicative (Contrôleurs, Gestionnaires et Visualisation)
│   ├── controllers/            # Contrôleurs pour la gestion de l'état, de l'interaction et du rendu
│   │   ├── animationController.js # Contrôle du cycle et de la boucle d'animation
│   │   ├── cameraController.js # Gestion de la position et de la projection de la caméra
│   │   ├── modeController.js   # Gestion de l'état du mode actif de l'application
│   │   ├── orbitController.js  # Contrôleur pour la manipulation interactive de la caméra (orbite)
│   │   ├── rendererController.js # Gestion de l'instance et des options du moteur de rendu
│   │   └── sceneController.js  # Gestion des objets présents dans la scène
│   ├── 2DVisualizer.js         # Logique de génération et de mise à jour des visualisations 2D
│   ├── 3DVisualizer.js         # Logique de génération et de mise à jour des visualisations 3D
│   ├── audioManager.js         # Gestion audio, chargement, lecture et analyse (FFT)
│   ├── config.js               # Fichier de configuration globale de l'application
│   ├── sceneManager.js         # Gestionnaire de haut niveau pour l'organisation des scènes
│   └── shaderManager.js        # Gestion, compilation et mise à jour des shaders
├── shaders/                    # (Dossier des ressources GLSL)
├── App.vue                     # Composant Vue racine de l'application
└── main.js                     # Point d'entrée de l'application (initialisation de Vue)
```

## Installation

```bash
npm install
npm run dev
```

## Utilisation

1. Charger un fichier audio ou activer le microphone
2. Sélectionner un mode (2D ou 3D)
3. Choisir un shader dans le sélecteur
4. Jouez avec le levier pour ajuster le volume
5. Ajuster les paramètres selon vos préférences
6. Optionnel: charger une image personnalisée (mode 2D avec masque alpha)

## Développement

Projet réalisé lors de la Nuit de l'Info, démontrant l'intégration de technologies web modernes pour créer des visualisations audio interactives et performantes.
