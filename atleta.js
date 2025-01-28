"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtletaProfessionista = exports.AtletaSemiProfessionista = exports.AtletaDilettante = exports.Atleta = void 0;
var TipologiaAtleta;
(function (TipologiaAtleta) {
    TipologiaAtleta["Professionista"] = "professionista";
    TipologiaAtleta["SemiProfessionista"] = "semi-professionista";
    TipologiaAtleta["Dilettante"] = "dilettante";
})(TipologiaAtleta || (TipologiaAtleta = {}));
class Atleta {
    constructor(codiceAtleta, nome, cognome, dataNascita, meseIscrizione, tipologia, quotaAnnuale) {
        this.codiceAtleta = codiceAtleta;
        this.nome = nome;
        this.cognome = cognome;
        this.dataNascita = dataNascita;
        this.meseIscrizione = meseIscrizione;
        this.tipologia = tipologia;
        this.quotaAnnuale = quotaAnnuale;
        this.ultimoMeseIscrizione = 10;
        if (this.meseIscrizione < 1 || this.meseIscrizione > this.ultimoMeseIscrizione) {
            throw new Error('Mese di iscrizione non valido o mese ultimo non corretto (ottobre)');
        }
        // Validazione quota
        if (tipologia === TipologiaAtleta.Dilettante && (quotaAnnuale < 300 || quotaAnnuale > 800)) {
            throw new Error('Quota annua per dilettante deve essere tra 300 e 800');
        }
        if (tipologia === TipologiaAtleta.SemiProfessionista && (quotaAnnuale < 100 || quotaAnnuale > 250)) {
            throw new Error('Quota annua per semi-professionista deve essere tra 100 e 250');
        }
        if (tipologia === TipologiaAtleta.Professionista && quotaAnnuale !== 0) {
            throw new Error('Quota annua per professionista deve essere zero');
        }
    }
    // Metodo per ottenere il codice dell'atleta
    getCodiceAtleta() {
        return this.codiceAtleta;
    }
    // Metodo per ottenere i dati anagrafici
    getDatiAnagrafici() {
        return `${this.nome} ${this.cognome}, Nato il ${this.dataNascita.toLocaleDateString()}`;
    }
    // Metodo per ottenere il mese di iscrizione
    getMeseIscrizione() {
        return this.meseIscrizione;
    }
}
exports.Atleta = Atleta;
class AtletaProfessionista extends Atleta {
    constructor(codiceAtleta, nome, cognome, dataNascita, meseIscrizione, quotaAnnuale) {
        super(codiceAtleta, nome, cognome, dataNascita, meseIscrizione, TipologiaAtleta.Professionista, quotaAnnuale);
    }
    // Il costo per un atleta professionista è sempre 0
    getCostoIscrizione() {
        return 0;
    }
    // Implementazione dell'interfaccia per indicare che questo atleta può essere iscritto
    iscrivibileAllaFederazione() {
        return true; // L'atleta può essere iscritto
    }
}
exports.AtletaProfessionista = AtletaProfessionista;
class AtletaSemiProfessionista extends Atleta {
    constructor(codiceAtleta, nome, cognome, dataNascita, meseIscrizione, quotaAnnuale) {
        super(codiceAtleta, nome, cognome, dataNascita, meseIscrizione, TipologiaAtleta.SemiProfessionista, quotaAnnuale);
    }
    // Il costo per un atleta semi-professionista è variabile tra 100 e 250
    getCostoIscrizione() {
        return this.quotaAnnuale;
    }
    // Implementazione dell'interfaccia per indicare che questo atleta può essere iscritto
    iscrivibileAllaFederazione() {
        return true; // L'atleta può essere iscritto
    }
}
exports.AtletaSemiProfessionista = AtletaSemiProfessionista;
class AtletaDilettante extends Atleta {
    constructor(codiceAtleta, nome, cognome, dataNascita, meseIscrizione, quotaAnnuale) {
        super(codiceAtleta, nome, cognome, dataNascita, meseIscrizione, TipologiaAtleta.Dilettante, quotaAnnuale);
    }
    // Il costo per un atleta dilettante è variabile tra 300 e 800
    getCostoIscrizione() {
        return this.quotaAnnuale;
    }
}
exports.AtletaDilettante = AtletaDilettante;
