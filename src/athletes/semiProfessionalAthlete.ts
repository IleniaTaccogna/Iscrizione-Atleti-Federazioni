import { Athlete } from './athlete';

export class SemiProfessionalAthlete extends Athlete {
    readonly athleteType: { type: "semiprofessional"; registrationCostRange: { min: number, max: number } } = { type: "semiprofessional", registrationCostRange: { min: 100, max: 250 } };
}