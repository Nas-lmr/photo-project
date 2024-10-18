# Photo Project

## Description

Ce projet est un site web avec un frontend développé avec Next.js et un backend en Node.js utilisant Express. Le frontend permet de servir une interface utilisateur réactive, tandis que le backend gère les requêtes API et la logique côté serveur.

## Prérequis

- [Node.js](https://nodejs.org/) (version 14 ou plus recommandée)
- [npm](https://www.npmjs.com/) (généralement installé avec Node.js)

## Installation

### 1. Cloner le dépôt

```bash
git clone git@github.com:Nas-lmr/photo-project.git
cd photo-project
```

### 2. Installation des dépendances

#### A. À la racine du projet

Exécutez cette commande à la racine du projet pour installer les dépendances du frontend :

```bash
npm install
```

#### B. Dans le dossier backend (serveur Node.js)

Accédez au répertoire backend et installez les dépendances du backend :

```bash
cd backend
npm install
```

## Configuration des environnements

### 1. Créer un fichier .env dans le dossier backend

Dans le dossier backend, créez un fichier .env pour stocker les variables d'environnement nécessaires au fonctionnement du backend. Par exemple :

```js
PORT = "PORT DU SERVER";
CLIENT_URL = "URL FRONTEND";
```

### 2. Créer un fichier .env.local à la racine du projet

À la racine du projet, créez un fichier .env.local pour configurer les variables d'environnement pour le frontend Next.js. Par exemple :

```js
NEXT_PUBLIC_API_URL = "URL DU BACKEND";
```

## Démarrage du projet

Une fois les dépendances installées et les fichiers .env et .env.local correctement configurés, vous pouvez démarrer à la fois le frontend et le backend en une seule commande.

Depuis la racine du projet, exécutez :

```bash
npm run dev
```
