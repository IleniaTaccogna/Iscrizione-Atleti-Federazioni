"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessionalAthlete = exports.SemiProfessionalAthlete = exports.AmateurAthlete = exports.Athlete = void 0;
class Athlete {
    constructor(athleteCode, firstName, lastName, birthDate, registrationMonth, type, annualFee) {
        this.athleteCode = athleteCode;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.registrationMonth = registrationMonth;
        this.type = type;
        this.annualFee = annualFee;
        this.lastRegistrationMonth = 10;
        if (this.registrationMonth < 1 || this.registrationMonth > this.lastRegistrationMonth) {
            throw new Error('Mese di iscrizione non valido (ottobre)');
        }
    }
    // Metodo per ottenere il codice dell'atleta
    getAthleteCode() {
        return this.athleteCode;
    }
    // Metodo per ottenere i dati anagrafici
    getPersonalData() {
        return `${this.firstName} ${this.lastName}, Nato il ${this.birthDate.toLocaleDateString()}`;
    }
    // Metodo per ottenere il costo dell'iscrizione
    getRegistrationCost() {
        return this.annualFee;
    }
    // Metodo per ottenere il mese di iscrizione
    getRegistrationMonth() {
        return this.registrationMonth;
    }
}
exports.Athlete = Athlete;
// Decoratore per assegnare il tipo di atleta
function AthleteTypeDecorator(type) {
    return function (target) {
        target.prototype.type = type;
    };
}
// Sottoclasse per l'atleta amatore (non serve scrivere costruttore)
let AmateurAthlete = (() => {
    let _classDecorators = [AthleteTypeDecorator('Amateur')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = Athlete;
    var AmateurAthlete = _classThis = class extends _classSuper {
    };
    __setFunctionName(_classThis, "AmateurAthlete");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AmateurAthlete = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    _classThis.registrationCostRange = { min: 300, max: 500 };
    (() => {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AmateurAthlete = _classThis;
})();
exports.AmateurAthlete = AmateurAthlete;
// Sottoclasse per l'atleta semi-professionista (non serve scrivere costruttore)
let SemiProfessionalAthlete = (() => {
    let _classDecorators = [AthleteTypeDecorator('SemiProfessional')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = Athlete;
    var SemiProfessionalAthlete = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.isIscrivibile = true;
        }
    };
    __setFunctionName(_classThis, "SemiProfessionalAthlete");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SemiProfessionalAthlete = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    _classThis.registrationCostRange = { min: 100, max: 250 };
    (() => {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SemiProfessionalAthlete = _classThis;
})();
exports.SemiProfessionalAthlete = SemiProfessionalAthlete;
// Sottoclasse per l'atleta professionista (non serve scrivere costruttore)
let ProfessionalAthlete = (() => {
    let _classDecorators = [AthleteTypeDecorator('Professional')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = Athlete;
    var ProfessionalAthlete = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.isIscrivibile = true;
        }
    };
    __setFunctionName(_classThis, "ProfessionalAthlete");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ProfessionalAthlete = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    _classThis.registrationCostRange = { min: 0, max: 0 };
    (() => {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProfessionalAthlete = _classThis;
})();
exports.ProfessionalAthlete = ProfessionalAthlete;
