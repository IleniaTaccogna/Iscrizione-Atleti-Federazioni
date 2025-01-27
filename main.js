"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const atleta_1 = require("./atleta");
const federazione_1 = require("./federazione");
// Creazione delle federazioni
let federazione1 = new federazione_1.Federazione(1);
let federazione2 = new federazione_1.Federazione(2);
// Creazione degli atleti
let atleta1 = new atleta_1.AtletaProfessionista(101, 'Giovanni', 'Rossi', new Date(1990, 0, 1), 2, 0);
let atleta2 = new atleta_1.AtletaSemiProfessionista(102, 'Marco', 'Bianchi', new Date(1995, 5, 10), 10, 100);
let atleta3 = new atleta_1.AtletaDilettante(103, 'Luca', 'Verdi', new Date(2000, 7, 15), 8, 300);
let atleta4 = new atleta_1.AtletaSemiProfessionista(104, 'Francesca', 'Neri', new Date(1997, 2, 20), 3, 250);
// Iscrizione degli atleti alle federazioni
federazione1.iscriviAtleta(atleta1);
federazione1.iscriviAtleta(atleta2);
federazione1.iscriviAtleta(atleta3); // Fallirà, è dilettante
federazione2.iscriviAtleta(atleta1);
federazione2.iscriviAtleta(atleta4);
// Stampa elenco atleti della federazione 1
console.log('Atleti della federazione 1:');
federazione1.elencoAtleti().forEach(atleta => {
    console.log(`${atleta.getDatiAnagrafici()}, Mese Iscrizione: ${atleta.getMeseIscrizione()}, Costo: ${atleta.getCostoIscrizione()}€`);
});
// Verifica se un atleta è iscritto a una federazione
console.log('Ricerca atleta 102 in federazione 1:', federazione1.elencoAtleti().some(atleta => atleta.getCodiceAtleta() === 102));
console.log('Ricerca atleta 101 in federazione 2:', federazione2.elencoAtleti().some(atleta => atleta.getCodiceAtleta() === 101));
