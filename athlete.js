"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessionalAthlete = exports.SemiProfessionalAthlete = exports.AmateurAthlete = void 0;
class Athlete {
    constructor(athleteCode, firstName, lastName, birthDate, registrationMonth, type, annualFee) {
        this.athleteCode = athleteCode;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.registrationMonth = registrationMonth;
        this.type = type;
        this.annualFee = annualFee;
        this.lastRegistrationMonth = 10;
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
                    throw new Error("Quota annua per semi-professionista deve essere tra 100 e 250");
                }
                break;
            case "Professional":
                if (annualFee !== 0) {
                    throw new Error("Quota annua per professionista deve essere 0");
                }
        }
    }
    // Metodo per ottenere il codice dell'atleta
    getAthleteCode() {
        return this.athleteCode;
    }
    // Metodo per ottenere i dati anagrafici
    getPersonalData() {
        return `${this.firstName} ${this.lastName}, Nato il ${this.birthDate.toLocaleDateString()}`;
    }
    // Metodo per ottenere il costo dell'iscrizione
    getRegistrationCost() {
        return this.annualFee;
    }
    // Metodo per ottenere il mese di iscrizione
    getRegistrationMonth() {
        return this.registrationMonth;
    }
}
class AmateurAthlete extends Athlete {
    constructor(athleteCode, firstName, lastName, birthDate, registrationMonth, annualFee) {
        super(athleteCode, firstName, lastName, birthDate, registrationMonth, "Amateur", annualFee);
    }
}
exports.AmateurAthlete = AmateurAthlete;
class FederableAthlete extends Athlete {
    constructor() {
        super(...arguments);
        this.isIscrivibile = true;
    }
}
class SemiProfessionalAthlete extends FederableAthlete {
    constructor(athleteCode, firstName, lastName, birthDate, registrationMonth, annualFee) {
        super(athleteCode, firstName, lastName, birthDate, registrationMonth, "SemiProfessional", annualFee);
    }
}
exports.SemiProfessionalAthlete = SemiProfessionalAthlete;
class ProfessionalAthlete extends FederableAthlete {
    constructor(athleteCode, firstName, lastName, birthDate, registrationMonth, annualFee) {
        super(athleteCode, firstName, lastName, birthDate, registrationMonth, "Professional", annualFee);
    }
}
exports.ProfessionalAthlete = ProfessionalAthlete;
