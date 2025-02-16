export type AthleteType =
    | {type: "professional"; registrationCostRange: {min:number, max: number} }
    | { type: "semiprofessional" ; registrationCostRange: {min:number, max: number} }
    | { type: "amateur" ; registrationCostRange: {min:number, max: number} };

const lastRegistrationMonth: number = 10;

export abstract class Athlete {

    protected abstract readonly athleteType: AthleteType;

    constructor(
        protected athleteCode: number,
        protected firstName: string,
        protected lastName: string,
        protected birthDate: Date,
        protected registrationMonth: number,
        protected annualFee: number,
    ) {
        if (this.registrationMonth < 1 || this.registrationMonth > lastRegistrationMonth) {
            throw new Error(`Mese di iscrizione non valido. Ultimo mese di iscrizione: ${lastRegistrationMonth}`);
        }
    }

    // Metodo per ottenere il codice dell'atleta
    getAthleteCode(): number {
        return this.athleteCode;
    }

    // Metodo per ottenere i dati anagrafici
    getPersonalData(): string {
        return `${this.firstName} ${this.lastName}, Nato il ${this.birthDate.toLocaleDateString()}`;
    }

    // Metodo per ottenere il costo dell'iscrizione
    getRegistrationCost(): number {
        return this.annualFee;
    }

    // Metodo per ottenere il mese di iscrizione
    getRegistrationMonth(): number {
        return this.registrationMonth;

    }
}
