"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Athlete = void 0;
exports.AthleteTypeDecorator = AthleteTypeDecorator;
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
            throw new Error('Mese di iscrizione non valido (ottobre)');
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
exports.Athlete = Athlete;
// Decoratore per assegnare il tipo di atleta
function AthleteTypeDecorator(type) {
    return function (target) {
        target.prototype.type = type;
    };
}
