// Ici, je vais insérer toute la logique en lien avec le fait de chercher des cartes

// Dans un premier temps, j'aurai besoin du datamapper, on part le chercher

const { database } = require('../../models/database');
const datamapper = require ('./../../models/datamapper');

const searchController = {

    // Dans un premier temps, on va tout simplement faire la logique pour afficher la vue servant à trier les cartes

    searchPage: function (request, response) {

        // Je me contente de délivrer uniquement la vue en question, c'est tout 
        
        response.render('search');

    },

    // Désormais, on va faire en sorte de trier les cartes de personnages par type

    // La encore, la requete est en asynchrone car on a manipule la base de données ! 

    showCharacterByType: async function (request, response) {

        const type = request.query.type;

        try {

            // Je part chercher ma requete SQL

            const characters = await datamapper.getCharacterByType(type);

            // Je fait un titre personnalisé pour participer à l'UX / UI

            const title = "Voici les personnages triés selon le type " + type + " :";

            // Je rend la vue home et je lui donne toutes les données nécéssaires

            response.render('home', {characters, title});

            // si il y a une erreur, il faut l'indiquer !

        } catch (error) {

            // Dans un premier temps, j'indique qu'il y a une erreur

            console.error;

            // Pour faciliter la maintenance, j'indique le type d'erreur ainsi que ce que cela signifie

            response.status(404).render('La reqûete demandée est impossible à faire');

        }

    }, 

    // Maintenant, on va afficher les cartes selon le nombre d'apparition

    showCharacterByTotalOfApparition: async function (request, response) {

        // Avant de faire mon magnifique Try / Catch, je dis à mon navigateur qu'on cherche les personnages selon le nombre d'apparition

        const apparition = request.query.apparition;

        try {

            // On part chercher la requete SQL réalisée dans le datamapper

            const characters = await datamapper.getCharacterByApparition(apparition);

            // Je fais un titre personnalisé toujours pour l'UX / UI

            const title = 'Voici les personnages sont apparus ' + apparition + " fois :";

            // Je délivre la vue en question ainsi que toutes les données nécéssaires pour que la fonctionalité marche

            response.render('home', {characters, title});

            // S'il y a une erreur, on réalise une gestion d'erreur

        } catch (error) {

            // Dans un premier temps, j'indique qu'il y a une erreur à ma console

            console.error;

            // je précise le type d'erreur et j'explique en toute lettres le problème pour faciliter la maintenance 

            response.status(404).render('La reqûete demandée est impossible à faire');

        }

    },

    // On va faire en sorte d'afficher les cartes selon leurs apparitions

    showCharacterByFirstApparition: async function (request, response) {

        // Je précise à mon navigateur qu'on cherche tout les personnages qui ont fait leurs premiere apparitions

        const first_apparition = request.query.first_apparition;

        // On est parti pour notre splendide gestion d'erreur

        try {

            // Si tout se passe bien, on devrait récolter nos données 

            const characters = await datamapper.getCharacterByFirstApparition(first_apparition);

            // ainsi qu'un titre personnalisé toujours pour l'UX / UI

            const title = 'Voici les personnages qui sont apparus pour la première fois dans le jeu ' + first_apparition + " :";

            // Ainsi que la redirection vers la page home qui aura les bonnes données nécéssaires

            response.render('home', {characters,title});

            // Sinon, c'est qu'il y a erreur !

        } catch (error) {

            // On indique qu'il y a une erreur dans la console

            console.error;

            // Et on indique quel est le type d'erreur et on le dit en toutes lettres pour faciliter la maintenance

            response.status(404).render('La reqûete demandée est impossible à faire');

        }

    },

    // Je vais maintenant afficher les personnages selon leurs dernières apparitions

    showCharacterByLastApparition: async function (request, response) {

         // Je précise à mon navigateur qu'on cherche tout les personnages qui ont fait leurs derniere apparitions

        const last_apparition = request.query.last_apparition;

        try {

            // Dans le meilleur des cas, on part chercher notre requete SQL faite dans le datamapper

            const characters = await datamapper.getCharacterByLastApparition(last_apparition);

            // Je fais un titre personnalisé pour l'UX / l'UI

            const title = 'Voici les personnages qui sont apparus pour la dernière fois dans le jeu ' + last_apparition + " :";

            // Je délivre la vue avec les données en questions sinon la page de s'affichera pas

            response.render('home', {characters, title});

            // En cas d'erreur ...

        } catch (error) {

            // J'indique l'erreur dans la console

            console.error;

            // Je délivre le type d'erreur ainsi que l'intutilé exact pour faciliter la maintenance

            response.status(404).render('La requete demandée est impossible à faire');

        }

    },

    // Désormais, on va trier les personnages de la licence par nom, c'est la dernière requete SQL pour aujourdhui !

    showCharacterByName: async function (request, response) {

        // On cherche le nom, on l'indique à notre navigateur

        const name = request.query.name;

        // Je fais mon try catch pour la gestion d'erreur

        try {

            // Je part chercher ma requete SQL

            const characters = await datamapper.getCharacterByName(name);

            // ainsi que le titre personnalisé toujours pour l'UX / UI

            const title = 'Voici les personnages dont le nom contient ' + name + ' :';

            // Et je renvoie la vue avec les données en question sinon cela ne marcherait pas

            response.render('home', {characters,title});

            // Si il y'a une erreur, je l'indique en deux temps

        } catch (error) {

            // Dans un premier temps, je dis à ma console qu'il y a une erreur

            console.error;

            // Dans un second temps j'indique le type d'erreur et un message pour faciliter la maintenance

            response.status(404).render('La requete demandée est impossible à faire');

        }

    }

};

// Evidemment, on va lier les concepts après la séparation de ceux ci, on va donc exporter le module pour le déplacer dans le router

module.exports = searchController;