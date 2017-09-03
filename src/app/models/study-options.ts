import { Genders } from './genders';
import { WordCases } from './word-cases';
import { WordQuantities } from './word-quantities';
import { WordTypes } from './word-types';

export class StudyOptions {
    public wordTypes: WordTypes;
    public wordCases: WordCases;
    public wordQuantities: WordQuantities;
    public genders: Genders;

    constructor() {
        this.wordTypes = new WordTypes();
        this.wordCases = new WordCases();
        this.wordQuantities = new WordQuantities();
        this.genders = new Genders();
    }
}
