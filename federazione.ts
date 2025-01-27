import { Atleta,AtletaDilettante } from "./atleta";

// Interfaccia Federazione
interface IFederazione {
    codiceFederazione: number;
    numeroAtletiIscritti: number;
    
    iscriviAtleta(atleta: Atleta): boolean;
    rimuoviAtleta(atleta: Atleta): void;
    elencoAtleti(): Atleta[];
  }
  

  export class Federazione implements IFederazione {
    codiceFederazione: number;
    numeroAtletiIscritti: number;
    private atletiIscritti: Atleta[];
  
    constructor(codiceFederazione: number) {
      this.codiceFederazione = codiceFederazione;
      this.numeroAtletiIscritti = 0;
      this.atletiIscritti = [];
    }
  
    // Iscrizione di un atleta alla federazione
    iscriviAtleta(atleta: Atleta): boolean {
      if (this.numeroAtletiIscritti >= 3) {
        console.log("La federazione ha già il numero massimo di atleti.");
        return false;
      }
      if (atleta instanceof AtletaDilettante) {
        console.log("La federazione non accetta atleti dilettanti.");
        return false;
      }
      this.atletiIscritti.push(atleta);
      this.numeroAtletiIscritti++;
      return true;
    }
  
    // Rimozione di un atleta dalla federazione
    rimuoviAtleta(atleta: Atleta): void {
      const index = this.atletiIscritti.findIndex(a => a.getCodiceAtleta() === atleta.getCodiceAtleta());
      if (index !== -1) {
        this.atletiIscritti.splice(index, 1);
        this.numeroAtletiIscritti--;
      }
    }
  
    // Elenco degli atleti iscritti, ordinato per mese di iscrizione
    elencoAtleti(): Atleta[] {
      return [...this.atletiIscritti].sort((a, b) => a.getMeseIscrizione() - b.getMeseIscrizione());
    }
  }
  