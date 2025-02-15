import { Athlete, AthleteTypeDecorator } from './athlete';

// Sottoclasse per l'atleta amatore 
@AthleteTypeDecorator('Amateur')
export class AmateurAthlete extends Athlete {
    static registrationCostRange = { min: 300, max: 500 };

}