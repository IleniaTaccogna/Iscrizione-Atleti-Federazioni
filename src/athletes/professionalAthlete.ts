import { Athlete, AthleteTypeDecorator, IFederable } from './athlete';

// Sottoclasse per l'atleta professionista 
@AthleteTypeDecorator('Professional')
export class ProfessionalAthlete extends Athlete implements IFederable {
    isIscrivibile = true;
    static registrationCostRange = { min: 0, max: 0 };
}


