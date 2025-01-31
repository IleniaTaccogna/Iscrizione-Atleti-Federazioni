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
        switch (type) {
            case "Amateur":
                if (annualFee < 300 || annualFee > 800) {
                    throw new Error("Quota annua per dilettante deve essere tra 300 e 800");
                }
                break;
            case "SemiProfessional":
                if (annualFee < 100 || annualFee > 250) {
                    throw new Error(
                        "Quota annua per semi-professionista deve essere tra 100 e 250");
                }
                break;
            case "Professional":
                if (annualFee !== 0) {
                    throw new Error("Quota annua per professionista deve essere 0");
                }
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

class AmateurAthlete extends Athlete {
    constructor(
        athleteCode: number,
        firstName: string,
        lastName: string,
        birthDate: Date,
        registrationMonth: number,
        annualFee: number
    ) {
        super(athleteCode, firstName, lastName, birthDate, registrationMonth, "Amateur", annualFee);
    }
}

class FederableAthlete extends Athlete {
    isIscrivibile: boolean = true;
}

class SemiProfessionalAthlete extends FederableAthlete {
    constructor(
        athleteCode: number,
        firstName: string,
        lastName: string,
        birthDate: Date,
        registrationMonth: number,
        annualFee: number
    ) {
        super(athleteCode, firstName, lastName, birthDate, registrationMonth, "SemiProfessional", annualFee);
    }
}

class ProfessionalAthlete extends FederableAthlete {
    constructor(
        athleteCode: number,
        firstName: string,
        lastName: string,
        birthDate: Date,
        registrationMonth: number,
        annualFee: number
    ) {
        super(athleteCode, firstName, lastName, birthDate, registrationMonth, "Professional", annualFee);
    }
}


export { AmateurAthlete, SemiProfessionalAthlete, ProfessionalAthlete }