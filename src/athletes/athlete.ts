type AthleteType = 'Amateur' | 'SemiProfessional' | 'Professional';

export abstract class Athlete {
    lastRegistrationMonth: number = 10;
    static registrationCostRange: { min: number, max: number };


    constructor(
        protected athleteCode: number,
        protected firstName: string,
        protected lastName: string,
        protected birthDate: Date,
        protected registrationMonth: number,
        public type: AthleteType,
        protected annualFee: number,
    ) {
        if (this.registrationMonth < 1 || this.registrationMonth > this.lastRegistrationMonth) {
            throw new Error('Mese di iscrizione non valido (ottobre)');
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

// Interfaccia per l'atleta iscrivibile
export interface IFederable {
    isIscrivibile: boolean;
}


// Decoratore per assegnare il tipo di atleta
export function AthleteTypeDecorator(type: AthleteType) {
    return function (target: any) {
        target.prototype.type = type;
    };
}







