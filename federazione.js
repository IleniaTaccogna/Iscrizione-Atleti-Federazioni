"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Federazione = void 0;
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
        this.atletiIscritti.push(atleta);
        this.numeroAtletiIscritti++;
        console.log(`Atleta ${atleta.getDatiAnagrafici()} iscritto con successo.`);
        return true;
    }
    // Rimozione di un atleta dalla federazione
    rimuoviAtleta(atleta) {
        const index = this.atletiIscritti.findIndex(a => a.getCodiceAtleta() === atleta.getCodiceAtleta());
        if (index !== -1) {
            this.atletiIscritti.splice(index, 1);
            this.numeroAtletiIscritti--;
            console.log(`Atleta ${atleta.getDatiAnagrafici()} rimosso.`);
        }
        else {
            console.log("Atleta non trovato.");
        }
    }
    // Elenco degli atleti iscritti, ordinato per mese di iscrizione
    elencoAtleti() {
        return [...this.atletiIscritti].sort((a, b) => a.getMeseIscrizione() - b.getMeseIscrizione());
    }
}
exports.Federazione = Federazione;
