"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Federation = void 0;
class Federation {
    constructor(federationCode) {
        this.federationCode = federationCode;
        this.registeredAthletesCount = 0;
        this.registeredAthletes = [];
    }
    // Iscrizione di un atleta alla federazione
    registerAthlete(athlete) {
        if (this.registeredAthletesCount >= 3) {
            console.log("La federazione ha già il numero massimo di atleti.");
            return false;
        }
        // if (athlete instanceof AmateurAthlete) {
        //   console.log("La federazione non accetta atleti dilettanti.");
        //   return false;
        // }
        this.registeredAthletes.push(athlete);
        this.registeredAthletesCount++;
        console.log(`Atleta ${athlete.getPersonalData()} iscritto con successo.`);
        return true;
    }
    // Rimozione di un atleta dalla federazione
    removeAthlete(athlete) {
        const index = this.registeredAthletes.findIndex(a => a.getAthleteCode() === athlete.getAthleteCode());
        if (index !== -1) {
            this.registeredAthletes.splice(index, 1);
            this.registeredAthletesCount--;
            console.log(`Atleta ${athlete.getPersonalData()} rimosso.`);
        }
        else {
            console.log("Atleta non trovato.");
        }
    }
    // Elenco degli atleti iscritti, ordinato per mese di iscrizione
    listAthletes() {
        return this.registeredAthletes.sort((a, b) => a.getRegistrationMonth() - b.getRegistrationMonth());
    }
}
exports.Federation = Federation;
