import { Athlete } from './athlete';

export class ProfessionalAthlete extends Athlete {

    isIscrivibile: boolean = true;

    static registrationCostRange = { min: 0, max: 0 };
}


