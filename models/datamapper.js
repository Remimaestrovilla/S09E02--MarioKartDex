
// Je vais avoir besoin de ma base de données pour la manipuler, on part évidemment la chercher !

const database = require('./database');

const datamapper = {

    // Dans un premier temps, je vais faire en sorte d'afficher sur la page d'accueil l'ensemble des personnages de la licence Mario Kart

    // Je vais piocher dans la base de données, du coup la fonction doit etre en asynchrone !

    getllCharacters: async function (callback) {

        // Je réalise tranquillement ma requete SQL

        const query = {

            text: `SELECT * FROM "character"`

        };

        // J'assigne ma requete à une constante, puisque on pioche dans la base de données, la fonction est asynchrone et la contante en await

        const result = await database.query(query);

        // Je retourne l'intégralité des résultats que j'ai trouvé

        return result.rows;

        // Je part dans le bon controleur pour continuer ma requete SQL, en l'occurence le homeController (la page d'accueil)

    },

    // Désormais on va faire en sorte d'afficher les détails de chacun des personnages de la licence

    // Comme on manipule une base de données, on oublie pas de définir la fonction en asynchrone

    getOneCharacter: async function (characterID, callback) {

        // Je transcris ici ma requete SQL

        const query = {

            text: `SELECT * FROM "character" WHERE id=$1`,

            values: [characterID],

        };

        // On va stocker les résultats dans une variable qui sera en await à cause de la manipulation de la BDD

        const result = await database.query(query);

        // On ne veut que le premier résultat, du coup on ne retourne qu'une seule cellule du tableau

        return result.rows[0];

    },

    // Désormais, on va trier les personnages par type !

    // Encore une fois, on manipule une base de données, on oublie donc pas de passer la fonction en asynchrone

    getCharacterByType: async function (type, callback) {

        // Je transcris ici ma requete SQL en faisant bien en sorte d'éviter ce qu'on appelle les injections SQL

        let query;
        
        query = {

            text: `SELECT * FROM "character" WHERE type = $1`,

            values: [type],

        };

        // On stocke le resultat dans une variable 

        const result = await database.query(query);

        // On décide de ne conserver que le premier résultat du tableau 
        
        return result.rows;

    },

    // Désormais, on va faire en sorte de trier les carte selon leurs nombre d'apparitions

    getCharacterByApparition: async function (apparition, callback) {

        let query;

        // Je transcrit ici ma requete SQL toujours en veillant à éviter ce qu'on appelle les injections en SQL

        query = {

            text: `SELECT * FROM "character" WHERE "total_of_apparition" = $1`,

            values: [apparition],

        };

        // Je stocke mes résultats dans une variable 

        const result = await database.query(query);

        // Et je décide de retourner tout les résultats

        return result.rows;

    },

    // Je vais trier les cartes selon leurs toutes premières apparitions

    getCharacterByFirstApparition: async function (first_apparition, callback) {

        let query;

        // On ecrit notre requete SQL toujours en veillant à eviter ce qu'on appelle les injections SQL

        query = {

            text: `SELECT * FROM "character" WHERE "first_apparition" = $1`,

            values: [first_apparition],

        };

        // Je stocke ma requete dans une variable 

        const result = await database.query(query);

        // Et je décide de retourner toutes les valeurs

        return result.rows;

    },

    // Désormais, on va faire en sorte de trier les personnages selon leurs dernières apparitions

    getCharacterByLastApparition: async function (last_apparition, callback) {

        // On met une constante en let car elle peut etre modifié à tout moment

        let query;

        // On transcrit notre magnifique requete SQL toujours en véillant à séparer le texte et la valeur pour éviter ce qu'on appelle les injections SQL

        query = {

            text: `SELECT * FROM "character" WHERE "last_apparition" = $1`,

            values: [last_apparition],

        };

        // On stocke les résultats dans une variable

        const result = await database.query(query);

        // Je retourne tout les résultats correspondants

        return result.rows;

    },

    // Désormais, on va faire en sorte de trier les personnages selon leurs noms

    getCharacterByName: async function (name, callback) {

        // Je met ma query en LET dans la mesure ou celle ci sera modifié au fur et à mesure

         let query;
         
         query = {

            text: `SELECT * FROM "character" WHERE "name" ILIKE $1`, // Ici, le ILIKE signifie que nous voulons une donnée approximative pour l'UX / UI

            values: [`%${name}%`], // On met les % en début et en fin pour dire que la séquence de caractères peut se trouver ou on veut

        };

        // Je stocke mon résultat dans une variable

        const result = await database.query(query);

        // Et je retourne les données en question

        return result.rows;

    }

};

module.exports = datamapper;