import { Injectable } from '@angular/core';

@Injectable()
export class ProgressService {
    public step: number;
    public progress: number;
    public progressPercent: string;
    public correct: number;
    public incorrect: number;

    constructor() { this.reset(); }

    public answer(correct: boolean) {
        this.progress = correct ? this.progress + this.step : this.progress - Math.round(this.step / 2);
        this.progress = Math.max(this.progress, 0);
        this.progress = this.progress > 100 ? 100 : this.progress;
        this.progressPercent = this.progress + '%';

        if (correct) {
        this.correct = this.correct + 1;
        } else {
            this.incorrect = this.incorrect + 1;
        }
    }

    public reset() {
        this.step = 10;
        this.progress = 0;
        this.progressPercent = '0%';
        this.correct = 0;
        this.incorrect = 0;
    }
}
