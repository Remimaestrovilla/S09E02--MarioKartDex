-- Je créer mes tables avant de créer les données qui serviront à completer les "cases" des tableaux;

-- Je réalise d'abord un begin pour dire à mon SQL que je vais démarrer l'importation des tables

BEGIN;

-- Je supprime les tables en questions si elles existent déja

-- Par convention, on écrit le nom des tables en anglais et au singulier

DROP TABLE IF EXISTS "character", "soft";

-- Je crée la table pour les personnages avec les bonnes propriétés

CREATE TABLE "character"(

  "id" SERIAL PRIMARY KEY,

  "name" TEXT NOT NULL,

  "first_apparition" TEXT NOT NULL,

  "last_apparition" TEXT NOT NULL,

  "total_of_apparition" INT NOT NULL,

  "type" TEXT NOT NULL,

  "visual_name" TEXT NOT NULL,

  -- Pour la maintenance, on rajoute des types supplémentaires

  "created_at" TIMESTAMPTZ,

  "updated_at" TIMESTAMPTZ

);

-- Je crée la table pour les jeux vidéos de la licence

CREATE TABLE "soft"(

    "id" SERIAL PRIMARY KEY,

    "name" TEXT NOT NULL,

    "device" TEXT NOT NULL,

    "amount_of_sellings" INT,

    -- Toujours pour la maintenance...

    "created_at" TIMESTAMPTZ,

    "updated_at" TIMESTAMPTZ

);

-- Je termine l'operation avec un commit qui va signifier que tant que le script n'est pas 1000% juste, rien ne se créer, c'est une sorte d'assurance

COMMIT;

-- On inscrit maintenant le fichier dans notre base de données qui s'appelle mariokart