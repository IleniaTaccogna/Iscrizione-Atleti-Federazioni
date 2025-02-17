import { Athlete } from './athlete';
import { isIscrivibile } from '../decorators/athleteDecorators';


@isIscrivibile(true)
export class ProfessionalAthlete extends Athlete {
    
    readonly athleteType: { type: "professional"; registrationCostRange: { min: number, max: number }, isIscrivible: boolean } = { type: "professional", registrationCostRange: { min: 0, max: 0 }, isIscrivible: true };


}


