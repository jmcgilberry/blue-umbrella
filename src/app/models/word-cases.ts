export class WordCases {
    public nominative: boolean;
    public accusative: boolean;
    public dative: boolean;
    public genitive: boolean;
    public instrumental: boolean;
    public prepositional: boolean;

    constructor() {
        this.nominative = false;
        this.accusative = false;
        this.dative = false;
        this.genitive = false;
        this.instrumental = false;
        this.prepositional = false;
    }
}
