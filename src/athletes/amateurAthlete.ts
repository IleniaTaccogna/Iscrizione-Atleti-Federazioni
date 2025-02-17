import { Athlete } from './athlete';

export class AmateurAthlete extends Athlete {
    readonly athleteType: { type: "amateur"; registrationCostRange:  { min: number, max: number }, isIscrivible: boolean  } = { type: "amateur", registrationCostRange: { min: 300, max: 500 },isIscrivible:false};

}
