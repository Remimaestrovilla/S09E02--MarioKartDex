// Ici, je vais ranger toute la logique en lien avec la session, le fait de stocker une carte dans ses favoris, en enlever une etc.

// On aura evidémment besoin de toutes les données de notre base de données, on part les chercher !

const datamapper = require('./../../models/datamapper');

const favoriteController = {

    // Dans un premier temps, je vais me contenter de créer une vue servant à stocker les cartes

    showFavorite: function (request, response) {

        // D'abord, on va définir une variable qui va contenir toutes nos cartes, et donc qui va être modifiable dans le temps

        let favoriteList;

        // Si le deck n'est pas encore créer

        if (!request.session.deck) {

            // alors, je le crée, tout simplement !

            favoriteList = []; // Je fais un tableau vide car c'est dans ce tableau qu'on va stocker les cartes

        } else {

            // Si le deck est déja crée, alors on va tout simplement assigner notre deck à une variable déjà définie

            favoriteList = request.session.deck;

        }

        // Désormais, on va tout simplement créer une vue en EJS qui va délivrer toutes les données dont j'ai besoin !

        response.render('favorite', {
            characters: favoriteList
        });

    },

    // Désormais, on va faire en sorte de pouvoir ajouter des cartes

    addToFavorite: async function (request, response, next) { // On manipule toujours la BDD, on oublie pas async -> await 

        try {

            // Dans un premier temps, on va prendre tout les ID des cartes et on va les convertir en nombre car sinon l'operation ne marchera pas

            const id = Number(request.params.id);

            // Si le deck n'existe pas, alors on l'initialise

            if (!request.session.deck) {

                request.session.deck = [];

            }

            // Je recherche dans le tableau si la carte a ajouter est déja dans le deck

            const foundCard = request.session.deck.find((element) => {

                // Si l'élément en question correspond bien à un id, alors on va le stocker dans nos session

                if (element.id === id) {

                    return true;

                } else { // Sinon, je ne stocke rien du tout !

                    return false;

                }

            });

            // Si la carte n'est pas déja dans la liste des favoris et que la taille du deck ne dépasse pas 99999 cartes, cette carte est ajoutée au deck

            if (foundCard === undefined && request.session.deck.length < 999999999) {

                const character = await datamapper.getOneCharacter(id);

                // Et on la pousse dans notre tableau

                request.session.deck.push(character);

            }

            // Enfin, on va rediriger vers la page du deck 

            response.redirect('/favorite');

        } catch (error) {

            // Et on passe la main au middleware suivant

            next(error);

        }

    },

    // Désormais, on va faire en sorte de retirer une carte de nos favoris ci celle ci ne nous interesse plus

    removeToFavorite: async function (request, response, next) {

        try {

            const character = await datamapper.getOneCharacter(request.params.id); // On oublie pas le async / await à cause de la manipulation de la BDD

            // Je filtre le tableau de cartes. Pour chaque carte, on va voir si il s'agit de la carte à supprimer

            // Si la carte n'est pas à supprimer, elle est ajoutée de manière automatique au deck

            request.session.deck = request.session.deck.filter(

                (element) => character.id !== element.id

            );

            // Je redirige toujours vers la route qui s'affiche de stocker les cartes

            response.redirect('/favorite');

        } catch (error) {

            next(error);

        }

    }

};

// Comme toujours, on va venir lier les concepts, on exporte le module et on ira le chercher dans le router !

module.exports = favoriteController;

// L'intégralité du back est terminée ! Excellent travail beau gosse ! 