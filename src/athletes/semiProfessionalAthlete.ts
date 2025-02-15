import { Athlete, AthleteTypeDecorator, IFederable } from './athlete';

// Sottoclasse per l'atleta semi-professionista 
@AthleteTypeDecorator('SemiProfessional')
export class SemiProfessionalAthlete extends Athlete implements IFederable {
    isIscrivibile: boolean = true;
    static registrationCostRange = { min: 100, max: 250 };


}