"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmateurAthlete = void 0;
const athlete_1 = require("./athlete");
class AmateurAthlete extends athlete_1.Athlete {
}
exports.AmateurAthlete = AmateurAthlete;
// isIscrivibile: boolean = false;
AmateurAthlete.registrationCostRange = { min: 300, max: 500 };
