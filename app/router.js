// Mon router à aussi besoin d'Express pour qu'il tourne, je part le chercher ! 

const express = require ('express');

// Je dis à mon serveur que Express doit tourner sur le routeur

const router = express.Router();

// Je vais chercher tout les controlleurs que j'ai réalisé pour créer mon deuxieme projet personel

const homeController = require ('./controllers/homeController');

const searchController = require ('./controllers/searchController');

const favoriteController = require ('./controllers/favoriteController');

// Ici, je réalise tout les tracés correspondant -> J'indique d'abord la route, puis le nom du controlleur, puis le nom de la méthode

router.get('/', homeController.showAllCharacters);

router.get('/character/:id', homeController.showOneCharacter);

router.get('/search', searchController.searchPage);

router.get('/search/type', searchController.showCharacterByType);

router.get('/search/apparition', searchController.showCharacterByTotalOfApparition);

router.get('/search/first_apparition', searchController.showCharacterByFirstApparition);

router.get('/search/last_apparition', searchController.showCharacterByLastApparition);

router.get('/search/name', searchController.showCharacterByName);

// Tous les tracés en lien avec le fait de stocker des cartes

router.get('/favorite', favoriteController.showFavorite);

router.get('/favorite/add/:id', favoriteController.addToFavorite);

router.get('/favorite/remove/:id', favoriteController.removeToFavorite);

// Pour veiller à la liaison de les concepts après leurs séparations, je part lier le router au serveur, d'abord je dois l'exporter !

module.exports = router;

// C'est super ! La première étape de la séparation des concepts est respectée. Je vais faire encore mieux en séparant la logique de la non logique en réalisant des controleurs.