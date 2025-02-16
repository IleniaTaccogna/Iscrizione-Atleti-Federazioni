"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Federation = void 0;
exports.getFederationCodes = getFederationCodes;
const federations = [];
class Federation {
    constructor(federationCode) {
        this.federationCode = federationCode;
        this.registeredAthletes = [];
        federations.push(this);
    }
    // Restituisce la lunghezza dell'array
    getRegisteredAthletesCount() {
        return this.registeredAthletes.length;
    }
    // Iscrizione di un atleta alla federazione
    registerAthlete(athlete) {
        if (this.getRegisteredAthletesCount() >= 3) {
            console.error("La federazione ha già il numero massimo di atleti.");
            return;
        }
        const { min, max } = athlete.athleteType.registrationCostRange;
        if (athlete.getRegistrationCost() < min || athlete.getRegistrationCost() > max) {
            console.error(`Atleta ${athlete.getPersonalData()} non idoneo per l'iscrizione. La quota annua deve essere tra ${min}€ e ${max}€`);
            return;
        }
        this.registeredAthletes.push(athlete);
        console.log(`Atleta ${athlete.getPersonalData()} iscritto con successo.`);
        return;
    }
    // Rimozione di un atleta dalla federazione
    removeAthlete(athlete) {
        const index = this.registeredAthletes.findIndex(a => a.getAthleteCode() === athlete.getAthleteCode());
        if (index !== -1) {
            this.registeredAthletes.splice(index, 1);
            console.log(`\nAtleta ${athlete.getPersonalData()} rimosso.`);
        }
        else {
            console.error("\nAtleta non trovato.");
        }
    }
    // Elenco degli atleti iscritti, ordinato per mese di iscrizione
    showAthletes() {
        // Ordina gli atleti per mese di iscrizione
        const sortedAthletes = this.registeredAthletes.sort((a, b) => a.getRegistrationMonth() - b.getRegistrationMonth());
        // Stampa i dettagli di ogni atleta
        console.log(`\nAtleti iscritti alla federazione ${this.federationCode}:`);
        sortedAthletes.forEach(athlete => {
            console.log(`${athlete.getPersonalData()}, Mese Iscrizione: ${athlete.getRegistrationMonth()}, Costo: ${athlete.getRegistrationCost()}€`);
        });
    }
    // Ricerca di un atleta per codice e stampa dei risultati
    findAthlete(athleteCode) {
        const athlete = this.registeredAthletes.find(a => a.getAthleteCode() === athleteCode);
        if (athlete) {
            console.log(`\nAtleta trovato nella federazione ${this.federationCode}:`);
            console.log(`${athlete.getPersonalData()}, Mese Iscrizione: ${athlete.getRegistrationMonth()}, Costo: ${athlete.getRegistrationCost()}€`);
        }
        else {
            console.error(`\nAtleta con codice ${athleteCode} non trovato nella federazione ${this.federationCode}.`);
        }
    }
}
exports.Federation = Federation;
// Metodo per ottenere i codici delle federazioni   
function getFederationCodes() {
    return federations.map(federation => federation.federationCode);
}
