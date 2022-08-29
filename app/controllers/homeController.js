// Ici, je réalise un controlleur pour insérer toute la logique qui sera présente sur la page d'accueil de mon application mobile

const datamapper = require ('../../models/datamapper');

const homeController = {

    // Je réalise la méthode qui servira juste à afficher la page d'accueil de mon projet. J'appelle la méthode home pour que cela soit cohérent.

    home: function (request, response) {

        // Je me charge de renvoyer la vue en question, elle s'appelle home.ejs dans mon code

        response.render('home.ejs');

    }

};

// Toujours pour lier les concepts entre eux, je n'hésite pas à exporter le module pour l'insérer autre part. Il partira dans le routeur !

module.exports = homeController;

// La séparation des concepts est respectée de la tête aux pied, bien joué !