
// Dans le fichier, je vais spécifier une variable d'environnement, du coup il faut que je part chercher mon dotenv

const dotenv = require ('dotenv');

// Je le configure comme sur le serveur

dotenv.config()

// J'ai besoin de récuperer le module pg qui va me permettre de manipuler ma base de données au fur et à mesure du projet

const {Client} = require('pg');

// J'assigne à la constante la base de donnée que je veux, pour l'adresse exacte de la BDD, il faut aller sur le .env, c'est plus sécurisé !

const client = new Client(process.env.PG_URL);

// Je dis à mon serveur que je veux établir une connection entre mon serveur et ma base de données 

client.connect();

// Enfin, j'exporte la base de données pour la mettre ailleurs, ici, il faudra la placer dans le datamapper qui va faire toutes nos requetes sql

module.exports = client;