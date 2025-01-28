enum TipologiaAtleta {
    Professionista = 'professionista',
    SemiProfessionista = 'semi-professionista',
    Dilettante = 'dilettante'
}

// Interfaccia per gli atleti che possono iscriversi alla federazione
interface IscrivibileAllaFederazione {
    // Restituisce true se l'atleta può essere iscritto alla federazione
    iscrivibileAllaFederazione(): boolean;
}

abstract class Atleta {

    ultimoMeseIscrizione: number = 10;

    constructor(
        protected codiceAtleta: number,
        protected nome: string,
        protected cognome: string,
        protected dataNascita: Date,
        protected meseIscrizione: number,
        protected tipologia: TipologiaAtleta,
        protected quotaAnnuale: number,

    ) {
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
    getCodiceAtleta(): number {
        return this.codiceAtleta;
    }

    // Metodo per ottenere i dati anagrafici
    getDatiAnagrafici(): string {
        return `${this.nome} ${this.cognome}, Nato il ${this.dataNascita.toLocaleDateString()}`;
    }

    // Metodo astratto per ottenere il costo dell'iscrizione
    abstract getCostoIscrizione(): number;

    // Metodo per ottenere il mese di iscrizione
    getMeseIscrizione(): number {
        return this.meseIscrizione;
    }
}


class AtletaProfessionista extends Atleta implements IscrivibileAllaFederazione {
    constructor(
        codiceAtleta: number,
        nome: string,
        cognome: string,
        dataNascita: Date,
        meseIscrizione: number,
        quotaAnnuale: number,
    ) {
        super(codiceAtleta, nome, cognome, dataNascita, meseIscrizione, TipologiaAtleta.Professionista, quotaAnnuale);
    }

    // Il costo per un atleta professionista è sempre 0
    getCostoIscrizione(): number {
        return 0;
    }

    // Implementazione dell'interfaccia per indicare che questo atleta può essere iscritto
    iscrivibileAllaFederazione(): boolean {
        return true; // L'atleta può essere iscritto
    }
}


class AtletaSemiProfessionista extends Atleta implements IscrivibileAllaFederazione {
    constructor(
        codiceAtleta: number,
        nome: string,
        cognome: string,
        dataNascita: Date,
        meseIscrizione: number,
        quotaAnnuale: number,
    ) {
        super(codiceAtleta, nome, cognome, dataNascita, meseIscrizione, TipologiaAtleta.SemiProfessionista, quotaAnnuale);
    }

    // Il costo per un atleta semi-professionista è variabile tra 100 e 250
    getCostoIscrizione(): number {
        return this.quotaAnnuale;
    }

    // Implementazione dell'interfaccia per indicare che questo atleta può essere iscritto
    iscrivibileAllaFederazione(): boolean {
        return true; // L'atleta può essere iscritto
    }
}


class AtletaDilettante extends Atleta {
    constructor(
        codiceAtleta: number,
        nome: string,
        cognome: string,
        dataNascita: Date,
        meseIscrizione: number,

        quotaAnnuale: number,
    ) {
        super(codiceAtleta, nome, cognome, dataNascita, meseIscrizione, TipologiaAtleta.Dilettante, quotaAnnuale);
    }

    // Il costo per un atleta dilettante è variabile tra 300 e 800
    getCostoIscrizione(): number {
        return this.quotaAnnuale;
    }
}

export { Atleta, AtletaDilettante, AtletaSemiProfessionista, AtletaProfessionista }