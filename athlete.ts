type AthleteType = 'Amateur' | 'SemiProfessional' | 'Professional';

abstract class Athlete {
    lastRegistrationMonth: number = 10;
    constructor(
        protected athleteCode: number,
        protected firstName: string,
        protected lastName: string,
        protected birthDate: Date,
        protected registrationMonth: number,
        protected type: AthleteType,
        protected annualFee: number,
    ) {
        if (this.registrationMonth < 1 || this.registrationMonth > this.lastRegistrationMonth) {
            throw new Error('Mese di iscrizione non valido(ottobre)');
        }
        if (type === "Amateur" && (annualFee < 300 || annualFee > 800)) {
            throw new Error('Quota annua per dilettante deve essere tra 300 e 800');
        }
        if (type === "SemiProfessional" && (annualFee < 100 || annualFee > 250)) {
            throw new Error('Quota annua per semi-professionista deve essere tra 100 e 250');
        }
        if (type === "Professional" && annualFee !== 0) {
            throw new Error('Quota annua per professionista deve essere zero');
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

    // Metodo astratto per ottenere il costo dell'iscrizione
    abstract getRegistrationCost(): number;

    // Metodo per ottenere il mese di iscrizione
    getRegistrationMonth(): number {
        return this.registrationMonth;
    }
}

// Interfaccia per gli atleti che possono iscriversi alla federazione
interface IFederable {
    canRegisterToFederation(): boolean;
}

class ProfessionalAthlete extends Athlete implements IFederable {
    constructor(
        athleteCode: number,
        firstName: string,
        lastName: string,
        birthDate: Date,
        registrationMonth: number,
        annualFee: number,
    ) {
        super(athleteCode, firstName, lastName, birthDate, registrationMonth, "Professional", annualFee);
    }

    // Il costo per un atleta professionista è sempre 0
    getRegistrationCost(): number {
        return 0;
    }

    // Implementazione dell'interfaccia per indicare che questo atleta può essere iscritto
    canRegisterToFederation(): boolean {
        return true;
    }
}

class SemiProfessionalAthlete extends Athlete implements IFederable {
    constructor(
        athleteCode: number,
        firstName: string,
        lastName: string,
        birthDate: Date,
        registrationMonth: number,
        annualFee: number,
    ) {
        super(athleteCode, firstName, lastName, birthDate, registrationMonth, "SemiProfessional", annualFee);
    }

    // Il costo per un atleta semi-professionista è variabile tra 100 e 250
    getRegistrationCost(): number {
        return this.annualFee;
    }

    // Implementazione dell'interfaccia per indicare che questo atleta può essere iscritto
    canRegisterToFederation(): boolean {
        return true;
    }
}

class AmateurAthlete extends Athlete {
    constructor(
        athleteCode: number,
        firstName: string,
        lastName: string,
        birthDate: Date,
        registrationMonth: number,
        annualFee: number,
    ) {
        super(athleteCode, firstName, lastName, birthDate, registrationMonth,"Amateur", annualFee);
    }

    // Il costo per un atleta dilettante è variabile tra 300 e 800
    getRegistrationCost(): number {
        return this.annualFee;
    }
}

export { Athlete, AmateurAthlete, SemiProfessionalAthlete, ProfessionalAthlete }