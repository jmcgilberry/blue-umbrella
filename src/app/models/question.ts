export class Question {
    public hint: string;
    public correctAnswer: string;
    public allAnswers: string[];
    public wordType: string;
    public wordQuantity: string;
    public wordCase: string;
    public wordGender: string;
    public word: any;

    constructor() {
        this.allAnswers = [ ];
    }
}
