import { Athlete } from './athlete';
import { isIscrivibile } from '../decorators/athleteDecorator';


@isIscrivibile(true)
export class SemiProfessionalAthlete extends Athlete {
readonly min = 100;
readonly max = 250;
    // readonly athleteType: { type: "semiprofessional"; registrationCostRange:{ min: number, max: number }} = { type: "semiprofessional", registrationCostRange: { min: 100, max: 250 }};
}