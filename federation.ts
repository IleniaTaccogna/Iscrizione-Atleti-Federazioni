import  {ProfessionalAthlete, SemiProfessionalAthlete } from "./athlete";

export class Federation<T extends ProfessionalAthlete | SemiProfessionalAthlete>  {
  federationCode: number;
  registeredAthletesCount: number;
  registeredAthletes: T[];

  constructor(federationCode: number) {
      this.federationCode = federationCode;
      this.registeredAthletesCount = 0;
      this.registeredAthletes = [];
  }

    // Iscrizione di un atleta alla federazione
  registerAthlete(athlete: T): boolean {
      if (this.registeredAthletesCount >= 3) {
          console.log("La federazione ha già il numero massimo di atleti.");
          return false;
      }

      if (!athlete.isIscribable()) {
          console.log(`Atleta ${athlete.getPersonalData()} non idoneo per l'iscrizione.`);
          return false;
      }
      this.registeredAthletes.push(athlete);
      this.registeredAthletesCount++;
      console.log(`Atleta ${athlete.getPersonalData()} iscritto con successo.`);
      return true; 
  }

     // Rimozione di un atleta dalla federazione
  removeAthlete(athlete: T): void {
      const index = this.registeredAthletes.findIndex(a => a.getAthleteCode() === athlete.getAthleteCode());
      if (index !== -1) {
          this.registeredAthletes.splice(index, 1);
          this.registeredAthletesCount--;
          console.log(`Atleta ${athlete.getPersonalData()} rimosso.`);
      } else {
          console.log("Atleta non trovato.");
      }
  }

  // Elenco degli atleti iscritti, ordinato per mese di iscrizione
  listAthletes(): T[] {
      return this.registeredAthletes.sort((a, b) => a.getRegistrationMonth() - b.getRegistrationMonth());
  }
}

