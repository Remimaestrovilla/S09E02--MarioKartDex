// J'ai aussi besoin du dotenv ! Pour les variables d'environnement, je part le chercher

const dotenv = require ('dotenv');

// On a téléchargé le module express-session pour stocker des cartes en session, on part le chercher

const session = require ('express-session');

// Dans un premier temps, j'ai besoin de Express pour construire le serveur ! Je part le chercher !

const express = require ('express');

// Je configure mon environnement personnel de sorte à ce que le serveur s'ouvre sur le port que j'ai choisi par moi même 

dotenv.config();

// Il faut que j'assigne un port à mon application, on décide que par défaut, le site tournera sur le port 3003 

const PORT = process.env.PORT || 3002;

// J'aurai aussi besoin du router que j'ai crée un peu plus tot pour que tout soit d'equerre

const router = require ('./router');

// Je dis à mon application qu'elle va tourner grace à Express

const app = express();

// Enfin, je vais faire appel à la méthode PATH d'express qui va permettre de récuperer tout les fichiers pour les coller entre eux

const path = require ('path');

// Je vais maintenant chercher toutes mes vues ! Dans un premier temps, je précise que je cherche des views qui sont dans le dossier du même nom

app.set('views', path.join(__dirname, './views'));

// Puis dans un deuxième temps je précise le nom de mon moteur de vues ainsi que le module à aller chercher, c'est à dire l'EJS

app.set('view engine', 'ejs');

// Avec la méthode static d'express, je part chercher l'intégralité du CSS !

app.use(express.static(path.join(__dirname, './static')));

// Je met en place les règles que je veux pour mes sessions

app.use(session({

    secret: process.env.secret, // le "secret" qui sert à générer les identifiants de sessions uniques, je le met dans mon .env pour la sécurité 

    resave: true, // sauvegarde automatique de la session à la fin de la requête

    saveUninitialized: true, // créer une session pour l'internaute dans tous les cas, mais si elle est vide.

    cookie: {

        // des options pour le cookie qui contient l'identifiant de session comme sa durée de vie par exemple.

        maxAge: 999999999999999999999999999999999999999 // Je met le temps de seconde pour chaque sessions, ca en fait du temps ! ^^

    }

}));

// J'ai séparé le router et le server pour la séparation des concepts, mais il faut bien que les deux soient liées, je m'execute

app.use(router);

// Je met enfin mon serveur en mode écoute et je fait un petit message pour faciliter la maintenance

app.listen(PORT, function (request, response) {

    console.log(`Le serveur tourne sur le port ${PORT}`);

});