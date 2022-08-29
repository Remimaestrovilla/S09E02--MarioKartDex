-- Désormais, j'écris les données qui vont me servir pour remplir ma base de données

-- Comme toujours, j'écrit le BEGIN qui me permet de dire à mon SQL qu'on va commencer les injections dans le tableau 

BEGIN;

-- Je vais d'abord insérer les données des personnages

INSERT INTO "character"("name", "first_apparition", "last_apparition", "total_of_apparition", "type", "visual_name") VALUES 

('Mario','Super Mario Kart','Mario Kart Tour', 14,'Humain','Mario.jpg' ), 

('Peach','Super Mario Kart','Mario Kart Tour', 13,'Princesse','Peach.jpg' ), 

('Bowser','Super Mario Kart','Mario Kart Tour', 12,'Carapace','Bowser.jpg' ), 

('Luigi','Super Mario Kart','Mario Kart Tour', 14,'Humain','Luigi.jpg' ), 

('Yoshi','Super Mario Kart','Mario Kart Tour', 13,'Dinosaure','Yoshi.jpg' ), 

('Toad','Super Mario Kart','Mario Kart Tour', 12,'Champignon','Toad.jpg' ), 

('Koopa','Super Mario Kart','Mario Kart Tour', 6,'Carapace','Koopa.jpg' ), 

('Donkey Kong Junior','Super Mario Kart','Mario Kart Tour', 2,'Singe','Donkey_Kong_Junior.jpg' ), 

('Donkey Kong','Mario Kart 64','Mario Kart Tour', 11,'Singe','Donkey_Kong.jpg' ), 

('Wario','Mario Kart 64','Mario Kart Tour', 11,'Humain','Wario.jpg' ), 

('Daisy','Mario Kart Double Dash','Mario Kart Tour', 7,'Princesse','Daisy.jpg' ), 

('Waluigi','Mario Kart Double Dash','Mario Kart Tour', 7,'Humain','Waluigi.jpg' ), 

('Baby Mario','Mario Kart Double Dash','Mario Kart Tour', 5,'Humain', 'Baby_Mario.jpg' ), 

('Baby Luigi','Mario Kart Double Dash','Mario Kart Tour', 4,'Humain','Baby_Luigi.jpg' ), 

('Toadette','Mario Kart Double Dash','Mario Kart Tour', 4,'Champignon','Toadette.jpg' ), 

('Bowser Junior','Mario Kart Double Dash','Mario Kart Tour', 4,'Carapace','Bowser_Junior.jpg' ), 

('Roi Boo','Mario Kart Double Dash','Mario Kart Tour', 5,'Fantome','Roi_Boo.jpg' ), 

('Birdo','Mario Kart Double Dash','Mario Kart Tour', 3,'Dinosaure','Birdo.jpg' ), 

('Diddy Kong','Mario Kart Double Dash','Mario Kart Tour', 3,'Singe','Diddy_Kong.jpg' ), 

('Paratroopa','Mario Kart Double Dash','Mario Kart Double Dash',1,'Carapace','Paratroopa.jpg' ), 

('Flora Piranha','Mario Kart Double Dash','Mario Kart Double Dash',1,'Special','Flora_Piranha.jpg' ), 

('Skelerex','Mario Kart DS','Mario Kart Tour', 3,'Carapace','Skelerex.jpg' ), 

('R.O.B','Mario Kart DS','Mario Kart DS', 1,'Special', 'ROB.jpg' ), 

('Maskass','Mario Kart DS','Mario Kart Tour', 4,'Special','Maskass.jpg' ), 

('Harmonie','Mario Kart Wii','Mario Kart Tour', 5,'Princesse','Harmonie.jpg' ), 

('Mii','Mario Kart Wii','Mario Kart Tour', 4,'Special','Mii.jpg' ), 

('Baby Peach','Mario Kart Wii','Mario Kart Tour', 4,'Princesse','Baby_Peach.jpg' ), 

('Baby Daisy','Mario Kart Wii','Mario Kart Tour', 4,'Princesse','Baby_Daisy.jpg' ), 

('Bowser Skelet','Mario Kart Wii','Mario Kart Tour', 3,'Carapace', 'Bowser_Skelet.jpg' ), 

('Funky Kong','Mario Kart Wii','Mario Kart Tour', 2,'Singe','Funky_Kong.jpg' ), 

('Meta-Mario','Mario Kart 7','Mario Kart Tour', 3,'Special','Meta_Mario.jpg' ), 

('Lakitu','Mario Kart 7','Mario Kart Tour', 4,'Vol','Lakitu.jpg' ), 

('Reine des Abeilles','Mario Kart 7','Mario Kart 7', 1,'Special','Reine_Des_Abeilles.jpg' ), 

('Wiggler','Mario Kart 7','Mario Kart 7', 1,'Special','Wiggler.jpg' ), 

('Baby Harmonie','Mario Kart 8','Mario Kart Tour', 2,'Princesse','Baby_Harmonie.jpg' ), 

('Peach Rose','Mario Kart 8','Mario Kart Tour', 2,'Princesse','Peach_Rose.jpg' ), 

('Koopaling','Mario Kart 8','Mario Kart Tour', 2,'Carapace','Koopaling.jpg' ), 

('Mario Tanuki','Mario Kart 8','Mario Kart Tour', 2,'Vol','Mario_Tanuki.jpg' ), 

('Peach chat','Mario Kart 8','Mario Kart Tour', 2,'Princesse', 'Peach_Chat.jpg' ), 

('Link','Mario Kart 8','Mario Kart 8', 1,'Humain','Link.jpg' ), 

('Villageois','Mario Kart 8','Mario Kart 8', 1,'Humain','Villageois.jpg' ), 

('Marie','Mario Kart 8','Mario Kart 8', 1,'Humain','Marie.jpg' ), 

('Inkling','Mario Kart 8','Mario Kart 8', 1,'Special', 'Inkling.jpg' ), 

('Peachette','Mario Kart Tour','Mario Kart Tour', 1,'Princesse', 'Peachette.jpg' ), 

('Pauline','Mario Kart Tour','Mario Kart Tour', 1,'Humain','Pauline.jpg' ), 

('Frère Marto','Mario Kart Tour','Mario Kart Tour', 1,'Carapace', 'Frere_Marto.jpg' ), 

('Topi Taupe','Mario Kart Tour','Mario Kart Tour', 1,'Special','Topi_Taupe.jpg' ), 

('Dixie Kong','Mario Kart Tour','Mario Kart Tour', 1,'Singe','Dixie_Kong.jpg' ), 

('Capitaine Toad','Mario Kart Tour','Mario Kart Tour', 1,'Champignon', 'Capitaine_Toad.jpg' ), 

('Carottin','Mario Kart Tour','Mario Kart Tour', 1,'Special','Carottin.jpg' ), 

('Roi Bob-Omb','Mario Kart Tour','Mario Kart Tour',1,'Explosif', 'Roi_Bob_Omb.jpg' ), 

('Kamek','Mario Kart Tour','Mario Kart Tour', 1,'Vol','Kamek.jpg' ), 

('Bill Dozer','Mario Kart Tour','Mario Kart Tour', 1,'Explosif','Bill_Dozer.jpg' ), 

('Pac-Man','Mario Kart Arcade GP','Mario Kart Arcade GPDX', 3,'Special','Pac_Man.jpg' ), 

('Madame Pac-Man','Mario Kart Arcade GP','Mario Kart Arcade GP2', 2,'Special','Madame_Pac_Man.jpg' ), 

('Blinky','Mario Kart Arcade GP','Mario Kart Arcade GP2', 2,'Special','Blinky.jpg' ), 

('Mametchi','Mario Kart Arcade GP2','Mario Kart Arcade GP2', 1,'Special','Mametchi.jpg' ), 

('Don-Chan','Mario Kart Arcade GPDX','Mario Kart GPDX', 1,'Special', 'Don-Chan.jpg' );

-- Je vais insérer les données respectives des jeux de la saga

INSERT INTO "soft"("name", "device", "amount_of_sellings") VALUES 

('Super Mario Kart', 'Super Nintendo', 8.76),

('Mario Kart 64', 'Nintendo 64', 9.87),

('Mario Kart Super Circuit', 'Gameboy Advance', 5.91),

('Mario Kart Double Dash', 'Nintendo Gamecube', 6.88),

('Mario Kart DS', 'Nintendo DS', 23.60),

('Mario Kart Wii', 'Nintendo Wii', 37.38),

('Mario Kart 7', 'Nintendo 3DS', 18.95),

('Mario Kart 8', 'Nintendo Wii U', 8.46),

('Mario Kart 8 Deluxe', 'Nintendo Switch', 43.35),

('Mario Kart Tour', 'Smartphones', null),

('Mario Kart Arcade GP', 'Arcade', null),

('Mario Kart Arcade GP2', 'Arcade', null),

('Mario Kart Arcade GPDX', 'Arcade', null),

('Mario Kart Arcade GPVR', 'Arcade', null);

-- Et on termine l'opération en disant au SQL de tout vérifier et SEULEMENT quand tout est ok, alors la base de données se remplira

COMMIT;

-- On injecte le fichier dans la base de données

-- J'ai fait une petite requete pour voir que tout est connecté et tout est bien connecté