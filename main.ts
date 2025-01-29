import { ProfessionalAthlete, SemiProfessionalAthlete, AmateurAthlete } from './athlete';
import { Federation } from './federation';

// Creazione delle federazioni
const federation1 = new Federation(1);
let federation2 = new Federation(2);

// Creazione degli atleti
let athlete1 = new ProfessionalAthlete(101, 'Elia', 'Kenyan', new Date(1990, 0, 1), 2, 0);
let athlete2 = new SemiProfessionalAthlete(102, 'Liam', 'Bianchi', new Date(1995, 5, 10), 10, 100);
let athlete3 = new AmateurAthlete(103, 'Edoardo', 'Midali', new Date(2000, 7, 15), 8, 300);
let athlete4 = new SemiProfessionalAthlete(104, 'Ciccio', 'Gamer89', new Date(1997, 2, 20), 3, 250);
let athlete5 = new AmateurAthlete(105, 'Silvia', 'DeNicolò', new Date(2000, 7, 15), 8, 300);
let athlete6 = new ProfessionalAthlete(106, 'Ilenia', 'Taccogna', new Date(1990, 0, 1), 2, 0);
let athlete7 = new ProfessionalAthlete(107, 'Nicolas', 'Fortunato', new Date(1990, 0, 1), 2, 0);

// Iscrizione degli atleti alle federazioni
federation1.registerAthlete(athlete1);
federation1.registerAthlete(athlete2);
federation1.registerAthlete(athlete3);  // Fallirà, è dilettante watson
federation1.registerAthlete(athlete5);
federation1.registerAthlete(athlete6);
federation1.registerAthlete(athlete7);


federation2.registerAthlete(athlete1);
federation2.registerAthlete(athlete4);

// Stampa elenco atleti della federazione 1
console.log('Atleti della federazione 1:');
federation1.listAthletes().forEach(athlete => {
  console.log(`${athlete.getPersonalData()},  Mese Iscrizione: ${athlete.getRegistrationMonth()}, Costo: ${athlete.getRegistrationCost()}€`);
});

// Verifica se un atleta è iscritto a una federazione
console.log('Ricerca atleta 102 in federazione 1:', federation1.listAthletes().some(athlete => athlete.getAthleteCode() === 102));
console.log('Ricerca atleta 101 in federazione 2:', federation2.listAthletes().some(athlete => athlete.getAthleteCode() === 101));