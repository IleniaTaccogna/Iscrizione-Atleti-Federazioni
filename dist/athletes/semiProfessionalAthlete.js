"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemiProfessionalAthlete = void 0;
const athlete_1 = require("./athlete");
class SemiProfessionalAthlete extends athlete_1.Athlete {
    constructor() {
        super(...arguments);
        this.athleteType = { type: "semiprofessional", registrationCostRange: { min: 100, max: 250 }, isIscrivible: true };
    }
}
exports.SemiProfessionalAthlete = SemiProfessionalAthlete;
