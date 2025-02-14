type AthleteType = 'Amateur' | 'SemiProfessional' | 'Professional';

abstract class Athlete {
    lastRegistrationMonth: number = 10;

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

// Decoratore per assegnare il tipo di atleta e validare la quota annuale
function AthleteTypeDecorator(type: AthleteType) {
    return function (target: any) {
        // Modifica direttamente la classe target
        target.prototype.type = type;

        // Aggiungiamo la logica di validazione della quota annuale
        const originalConstructor = target;

        target = class extends originalConstructor {
            constructor(...args: any[]) {
                super(...args);

                // Validazione annual fee per "Amateur"
                if (type === 'Amateur' && args[5] < 300 || args[5] > 800) {
                    throw new Error("Quota annua per dilettante deve essere tra 300 e 800");
                }

                // Validazione annual fee per "SemiProfessional"
                if (type === 'SemiProfessional' && (args[5] < 100 || args[5] > 250)) {
                    throw new Error("Quota annua per semi-professionista deve essere tra 100 e 250");
                }

                // Validazione annual fee per "Professional"
                if (type === 'Professional' && args[5] !== 0) {
                    throw new Error("Quota annua per professionista deve essere 0");
                }
            }
        };

        return target;
    };
}

// Sottoclasse per l'atleta amatore (non serve scrivere costruttore)
@AthleteTypeDecorator('Amateur')
class AmateurAthlete extends Athlete { }

// Sottoclasse per l'atleta semi-professionista (non serve scrivere costruttore)
@AthleteTypeDecorator('SemiProfessional')
class SemiProfessionalAthlete extends Athlete { }

// Sottoclasse per l'atleta professionista (non serve scrivere costruttore)
@AthleteTypeDecorator('Professional')
class ProfessionalAthlete extends Athlete { }

export { AmateurAthlete, SemiProfessionalAthlete, ProfessionalAthlete };
