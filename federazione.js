"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Federazione = void 0;
const atleta_1 = require("./atleta");
class Federazione {
    constructor(codiceFederazione) {
        this.codiceFederazione = codiceFederazione;
        this.numeroAtletiIscritti = 0;
        this.atletiIscritti = [];
    }
    // Iscrizione di un atleta alla federazione
    iscriviAtleta(atleta) {
        if (this.numeroAtletiIscritti >= 3) {
            console.log("La federazione ha già il numero massimo di atleti.");
            return false;
        }
        if (atleta instanceof atleta_1.AtletaDilettante) {
            console.log("La federazione non accetta atleti dilettanti.");
            return false;
        }
        this.atletiIscritti.push(atleta);
        this.numeroAtletiIscritti++;
        return true;
    }
    // Rimozione di un atleta dalla federazione
    rimuoviAtleta(atleta) {
        const index = this.atletiIscritti.findIndex(a => a.getCodiceAtleta() === atleta.getCodiceAtleta());
        if (index !== -1) {
            this.atletiIscritti.splice(index, 1);
            this.numeroAtletiIscritti--;
        }
    }
    // Elenco degli atleti iscritti, ordinato per mese di iscrizione
    elencoAtleti() {
        return [...this.atletiIscritti].sort((a, b) => a.getMeseIscrizione() - b.getMeseIscrizione());
    }
}
exports.Federazione = Federazione;
