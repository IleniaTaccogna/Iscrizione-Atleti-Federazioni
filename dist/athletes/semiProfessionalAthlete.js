"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemiProfessionalAthlete = void 0;
const athlete_1 = require("./athlete");
const athleteDecorators_1 = require("../decorators/athleteDecorators");
let SemiProfessionalAthlete = class SemiProfessionalAthlete extends athlete_1.Athlete {
    constructor() {
        super(...arguments);
        this.athleteType = { type: "semiprofessional", registrationCostRange: { min: 100, max: 250 }, isIscrivible: true };
    }
};
exports.SemiProfessionalAthlete = SemiProfessionalAthlete;
exports.SemiProfessionalAthlete = SemiProfessionalAthlete = __decorate([
    (0, athleteDecorators_1.isIscrivibile)(true)
], SemiProfessionalAthlete);
