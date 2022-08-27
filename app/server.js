// Dans un premier temps, j'ai besoin de Express pour construire le serveur ! Je part le chercher !

const express = require ('express');

// J'aurai aussi besoin du router que j'ai crée un peu plus tot pour que tout soit d'equerre

const router = require ('./router');

// Je dis à mon application qu'elle va tourner grace à Express

const app = express();

// Enfin, je vais faire appel à la méthode PATH d'express qui va permettre de récuperer tout les fichiers pour les coller entre eux

const path = require ('path');

// Il faut que j'assigne un port à mon application, on décide que par défaut, le site tournera sur le port 3006 

const PORT = 3006;

// Je vais maintenant chercher toutes mes vues ! Dans un premier temps, je précise que je cherche des views qui sont dans le dossier du même nom

app.set('views', path.join(__dirname, './views'));

// Puis dans un deuxième temps je précise le nom de mon moteur de vues ainsi que le module à aller chercher, c'est à dire l'EJS

app.set('view engine', 'ejs');

// Avec la méthode static d'express, je part chercher l'intégralité du CSS !

app.use(express.static(path.join(__dirname, './static')));

// J'ai séparé le router et le server pour la séparation des concepts, mais il faut bien que les deux soient liées, je m'execute

app.use(router);

// Je met enfin mon serveur en mode écoute et je fait un petit message pour faciliter la maintenance

app.listen(PORT, function (request, response) {

    console.log(`Le serveur tourne sur le port ${PORT}`);

});