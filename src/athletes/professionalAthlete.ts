import { Athlete } from './athlete';

export class ProfessionalAthlete extends Athlete {
    readonly athleteType: { type: "professional"; registrationCostRange: { min: number, max: number } } = { type: "professional", registrationCostRange: { min: 0, max: 0 } };


}


