import { Athlete } from './athlete';

export class SemiProfessionalAthlete extends Athlete {

    isIscrivibile: boolean = true;

    static registrationCostRange = { min: 100, max: 250 };
}