import { Athlete } from './athlete';
import { isIscrivibile } from '../decorators/athleteDecorator';


@isIscrivibile(true)
export class ProfessionalAthlete extends Athlete {
readonly min = 0;   
readonly max = 0;   
    // readonly athleteType: { type: "professional"; registrationCostRange:{ min: number, max: number }} = { type: "professional", registrationCostRange: { min: 0, max: 0 }};
}


