"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessionalAthlete = exports.SemiProfessionalAthlete = exports.AmateurAthlete = exports.Athlete = void 0;
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
    getAthleteCode() {
        return this.athleteCode;
    }
    // Metodo per ottenere i dati anagrafici
    getPersonalData() {
        return `${this.firstName} ${this.lastName}, Nato il ${this.birthDate.toLocaleDateString()}`;
    }
    // Metodo per ottenere il mese di iscrizione
    getRegistrationMonth() {
        return this.registrationMonth;
    }
}
exports.Athlete = Athlete;
class ProfessionalAthlete extends Athlete {
    constructor(athleteCode, firstName, lastName, birthDate, registrationMonth, annualFee) {
        super(athleteCode, firstName, lastName, birthDate, registrationMonth, "Professional", annualFee);
    }
    // Il costo per un atleta professionista è sempre 0
    getRegistrationCost() {
        return 0;
    }
    // Implementazione dell'interfaccia per indicare che questo atleta può essere iscritto
    canRegisterToFederation() {
        return true;
    }
}
exports.ProfessionalAthlete = ProfessionalAthlete;
class SemiProfessionalAthlete extends Athlete {
    constructor(athleteCode, firstName, lastName, birthDate, registrationMonth, annualFee) {
        super(athleteCode, firstName, lastName, birthDate, registrationMonth, "SemiProfessional", annualFee);
    }
    // Il costo per un atleta semi-professionista è variabile tra 100 e 250
    getRegistrationCost() {
        return this.annualFee;
    }
    // Implementazione dell'interfaccia per indicare che questo atleta può essere iscritto
    canRegisterToFederation() {
        return true;
    }
}
exports.SemiProfessionalAthlete = SemiProfessionalAthlete;
class AmateurAthlete extends Athlete {
    constructor(athleteCode, firstName, lastName, birthDate, registrationMonth, annualFee) {
        super(athleteCode, firstName, lastName, birthDate, registrationMonth, "Amateur", annualFee);
    }
    // Il costo per un atleta dilettante è variabile tra 300 e 800
    getRegistrationCost() {
        return this.annualFee;
    }
}
exports.AmateurAthlete = AmateurAthlete;
