import { Athlete } from './athlete';
import { Federable } from '../decorators/athleteDecorator';


@Federable(true)
export class SemiProfessionalAthlete extends Athlete {
    readonly min = 100;
    readonly max = 250;
}