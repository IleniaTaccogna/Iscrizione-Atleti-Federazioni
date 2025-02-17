"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmateurAthlete = void 0;
const athlete_1 = require("./athlete");
class AmateurAthlete extends athlete_1.Athlete {
    constructor() {
        super(...arguments);
        this.athleteType = { type: "amateur", registrationCostRange: { min: 300, max: 500 }, isIscrivible: false };
    }
}
exports.AmateurAthlete = AmateurAthlete;
