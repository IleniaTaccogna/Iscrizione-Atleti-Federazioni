"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessionalAthlete = void 0;
const athlete_1 = require("./athlete");
class ProfessionalAthlete extends athlete_1.Athlete {
    constructor() {
        super(...arguments);
        this.isIscrivibile = true;
    }
}
exports.ProfessionalAthlete = ProfessionalAthlete;
ProfessionalAthlete.registrationCostRange = { min: 0, max: 0 };
