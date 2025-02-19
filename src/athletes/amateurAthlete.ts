import { Athlete } from './athlete';
import { Federable } from "../decorators/athleteDecorator";


@Federable(false)
export class AmateurAthlete extends Athlete {
    readonly min = 300;
    readonly max = 500;
}
