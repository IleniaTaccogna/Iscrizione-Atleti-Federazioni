import { Athlete } from './athlete';
import { Federable } from '../decorators/athleteDecorator';


@Federable(true)
export class ProfessionalAthlete extends Athlete {
    readonly min = 0;
    readonly max = 0;
}


