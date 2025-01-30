import { ProfessionalAthlete, SemiProfessionalAthlete } from "./athlete";

const federations: Federation<any>[] = [];

export class Federation<T extends ProfessionalAthlete | SemiProfessionalAthlete> {
    federationCode: number;
    protected registeredAthletesCount: number;
    protected registeredAthletes: T[];

    constructor(federationCode: number) {
        this.federationCode = federationCode;
        this.registeredAthletesCount = 0;
        this.registeredAthletes = [];
        federations.push(this);
    }

    // Iscrizione di un atleta alla federazione
    registerAthlete(athlete: T): boolean {
        if (this.registeredAthletesCount >= 3) {
            console.log("La federazione ha già il numero massimo di atleti.");
            return false;
        }

        if (!athlete.isIscrivibile()) {
            console.log(`Atleta ${athlete.getPersonalData()} non idoneo per l'iscrizione.`);
            return false;
        }
        this.registeredAthletes.push(athlete);
        this.registeredAthletesCount++;
        console.log(`Atleta ${athlete.getPersonalData()} iscritto con successo.`);
        return true;
    }

    // Rimozione di un atleta dalla federazione
    removeAthlete(athlete: T): void {
        const index = this.registeredAthletes.findIndex(a => a.getAthleteCode() === athlete.getAthleteCode());
        if (index !== -1) {
            this.registeredAthletes.splice(index, 1);
            this.registeredAthletesCount--;
            console.log(`\nAtleta ${athlete.getPersonalData()} rimosso.`);
        } else {
            console.log("\nAtleta non trovato.");
        }
    }

    // Elenco degli atleti iscritti, ordinato per mese di iscrizione
    showAthletes(): void {
        // Ordina gli atleti per mese di iscrizione
        const sortedAthletes = this.registeredAthletes.sort((a, b) => a.getRegistrationMonth() - b.getRegistrationMonth());

        // Stampa i dettagli di ogni atleta
        console.log(`\nAtleti iscritti alla federazione ${this.federationCode}:`);
        sortedAthletes.forEach(athlete => {
            console.log(`${athlete.getPersonalData()}, Mese Iscrizione: ${athlete.getRegistrationMonth()}, Costo: ${athlete.getRegistrationCost()}€`);
        });
    }
    // Ricerca di un atleta per codice e stampa dei risultati
    findAthlete(athleteCode: number): void {
        const athlete = this.registeredAthletes.find(a => a.getAthleteCode() === athleteCode);
        if (athlete) {
            console.log(`\nAtleta trovato nella federazione ${this.federationCode}:`);
            console.log(`${athlete.getPersonalData()}, Mese Iscrizione: ${athlete.getRegistrationMonth()}, Costo: ${athlete.getRegistrationCost()}€`);
        } else {
            console.log(`\nAtleta con codice ${athleteCode} non trovato nella federazione ${this.federationCode}.`);
        }
    }
}

export function getFederationCodes(): number[] {   //static ci serve perchè altrimenti dovremmo richiamare il metodo su una instanza e non più globalmente
    return federations.map(federation => federation.federationCode);
}