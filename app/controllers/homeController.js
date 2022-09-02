// Ici, je réalise un controlleur pour insérer toute la logique qui sera présente sur la page d'accueil de mon application mobile

const datamapper = require('../../models/datamapper');

const homeController = {

    // Je réalise la méthode qui servira juste à afficher la page d'accueil de mon projet. J'appelle la méthode home pour que cela soit cohérent.

    home: function (request, response) {

        // Je me charge de renvoyer la vue en question, elle s'appelle home.ejs dans mon code

        response.render('home.ejs');

    },

    // Maintenant, on va faire en sorte d'afficher toutes les rêquetes SQL, encore une fois on passe la fonction en asynchrone à cause de la BDD

    showAllCharacters: async function (request, response) {

        // Je réalise une gestion d'erreur avec un superbe try / catch 

        // Dans un premier temps, j'ai besoin de tout les ID des personnages donc on les récupère et on les converti en nombre avec la propriété Number

        const characterID = Number(request.params.id);

        try {

            // Je vais séléctionner uniquement les données qui m'interessent 

            const characters = await datamapper.getllCharacters(characterID);

            // On va faire un titre pour personnaliser un minimum le projet

            const title = 'Voici tous les personnages de la licence Mario Kart';

            // On va délivrer la vue correspondante, home, en donnant toutes les données liées aux constantes

            response.render('home', {

                characters,

                title

            })

            // En cas d'erreur ...

        } catch (error) {

            // On donne un petit message dans la console en indiquant qu'il y a une erreur

            console.error(error);

            // Pour le SEO mais aussi pour faciliter la maintenance, on indique le type d'erreur et le message correspondant

            response.status(404).render('La carte demandée est malheureusement introuvable');

        }
        
    },

    // Désormais, on va faire en sorte de n'afficher qu'un seul personnage

    showOneCharacter: async function (request, response) {

        // Avant le try / catch il faut faire en sorte que l'id du personnage soit bien un chiffre et pas une séquence de caractères

        const characterID = Number (request.params.id);

        // Désormais je vais faire un magnifique try / catch 

        try {

            // On recupère l'ID de la carte qu'on avait déjà choppé en SQL

            const character = await datamapper.getOneCharacter(characterID);

            // Je distribue la vue 'characterDetail' qui contiendra toutes mes données

            response.render('characterDetail', {character});

            // Le cas échéant ...

        } catch (error) {

            // J'indique qu'il y a une erreur dans mon terminal 

            console.error(error);

            // Pour faciliter la maintenance, je déclare ou il y a un problème

            response.status(404).render('La carte séléctionnée est malheureusement introuvable')

        }

    }

};

// Toujours pour lier les concepts entre eux, je n'hésite pas à exporter le module pour l'insérer autre part. Il partira dans le routeur !

module.exports = homeController;

// La séparation des concepts est respectée de la tête aux pied, bien joué !