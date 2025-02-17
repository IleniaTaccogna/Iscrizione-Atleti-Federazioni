"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessionalAthlete = void 0;
const athlete_1 = require("./athlete");
class ProfessionalAthlete extends athlete_1.Athlete {
    constructor() {
        super(...arguments);
        this.athleteType = { type: "professional", registrationCostRange: { min: 0, max: 0 }, isIscrivible: true };
    }
}
exports.ProfessionalAthlete = ProfessionalAthlete;
