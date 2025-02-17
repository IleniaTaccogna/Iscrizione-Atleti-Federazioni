import { Athlete } from './athlete';
import { isIscrivibile } from '../decorators/athleteDecorators';


@isIscrivibile(true)
export class SemiProfessionalAthlete extends Athlete {
    readonly athleteType: { type: "semiprofessional"; registrationCostRange: { min: number, max: number }, isIscrivible: boolean } = { type: "semiprofessional", registrationCostRange: { min: 100, max: 250 }, isIscrivible: true };
}