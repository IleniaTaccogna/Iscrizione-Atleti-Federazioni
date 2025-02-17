import { Athlete } from './athlete';
import { isIscrivibile } from "../decorators/athleteDecorator";


    @isIscrivibile(false)
    export class AmateurAthlete extends Athlete {
        readonly min = 300;
        readonly max = 500;

    // readonly athleteType: { type: "amateur"; registrationCostRange:{ min: number, max: number }} = { type: "amateur", registrationCostRange: { min: 300, max: 500 }};
}
