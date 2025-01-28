import { Atleta } from "./atleta";

interface IFederazione<T extends Atleta> {
    codiceFederazione: number;
    numeroAtletiIscritti: number;
    atletiIscritti: T[];

    iscriviAtleta(atleta: T): boolean;
    rimuoviAtleta(atleta: T): void;
    elencoAtleti(): T[];
}

export class Federazione<T extends Atleta> implements IFederazione<T> {
    codiceFederazione: number;
    numeroAtletiIscritti: number;
    atletiIscritti: T[];

    constructor(codiceFederazione: number) {
        this.codiceFederazione = codiceFederazione;
        this.numeroAtletiIscritti = 0;
        this.atletiIscritti = [];
    }

    // Iscrizione di un atleta alla federazione
    iscriviAtleta(atleta: T): boolean {
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
    rimuoviAtleta(atleta: T): void {
        const index = this.atletiIscritti.findIndex(a => a.getCodiceAtleta() === atleta.getCodiceAtleta());
        if (index !== -1) {
            this.atletiIscritti.splice(index, 1);
            this.numeroAtletiIscritti--;
            console.log(`Atleta ${atleta.getDatiAnagrafici()} rimosso.`);
        } else {
            console.log("Atleta non trovato.");
        }
    }

    // Elenco degli atleti iscritti, ordinato per mese di iscrizione
    elencoAtleti(): T[] {
        return [...this.atletiIscritti].sort((a, b) => a.getMeseIscrizione() - b.getMeseIscrizione());
    }
}