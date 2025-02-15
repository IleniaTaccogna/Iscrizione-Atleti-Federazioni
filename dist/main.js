"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const professionalAthlete_1 = require("./athletes/professionalAthlete");
const semiProfessionalAthlete_1 = require("./athletes/semiProfessionalAthlete");
const amateurAthlete_1 = require("./athletes/amateurAthlete");
const federation_1 = require("./federation");
// Creazione delle federazioni
const atletica = new federation_1.Federation(1);
const judo = new federation_1.Federation(3);
// Creazione degli atleti
const athlete1 = new professionalAthlete_1.ProfessionalAthlete(101, 'Ilenia', 'Taccogna', new Date(2001, 8, 5), 1, 'Professional', 0);
const athlete2 = new semiProfessionalAthlete_1.SemiProfessionalAthlete(102, 'Silvia', 'De Nicolò', new Date(2000, 1, 6), 10, 'SemiProfessional', 100);
const athlete3 = new amateurAthlete_1.AmateurAthlete(103, 'Jambo', 'Kenyan', new Date(2015, 7, 16), 8, 'Amateur', 300);
const athlete4 = new semiProfessionalAthlete_1.SemiProfessionalAthlete(104, 'Leonardo', 'Galluzzi', new Date(1997, 2, 20), 3, 'SemiProfessional', 250);
// Iscrizione degli atleti alle federazioni
atletica.registerAthlete(athlete1);
atletica.registerAthlete(athlete2);
atletica.registerAthlete(athlete3); // Non viene iscritto
atletica.registerAthlete(athlete4);
judo.registerAthlete(athlete1);
judo.registerAthlete(athlete2);
judo.registerAthlete(athlete3); // Non viene iscritto
judo.registerAthlete(athlete4);
// Stampa elenco dei codici delle federazioni
console.log('\nCodici di tutte le federazioni:', (0, federation_1.getFederationCodes)().join(', '));
// Stampa elenco atleti della federazione 1
atletica.showAthletes();
// Ricerca atleta per codice nelle federazioni
atletica.findAthlete(101);
atletica.findAthlete(102);
judo.findAthlete(103);
judo.findAthlete(104);
