"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessionalAthlete = void 0;
const athlete_1 = require("./athlete");
const athleteDecorator_1 = require("../decorators/athleteDecorator");
let ProfessionalAthlete = class ProfessionalAthlete extends athlete_1.Athlete {
    constructor() {
        super(...arguments);
        this.min = 0;
        this.max = 0;
        // readonly athleteType: { type: "professional"; registrationCostRange:{ min: number, max: number }} = { type: "professional", registrationCostRange: { min: 0, max: 0 }};
    }
};
exports.ProfessionalAthlete = ProfessionalAthlete;
exports.ProfessionalAthlete = ProfessionalAthlete = __decorate([
    (0, athleteDecorator_1.isIscrivibile)(true)
], ProfessionalAthlete);
