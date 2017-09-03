import { Component, OnInit } from '@angular/core';

import { Animate, WordType } from '../../models/enums';
import { Question } from '../../models/question';
import { LocalStorageService } from '../../services/local-storage.service';
import { QuestionService } from '../../services/question.service';
import { SpinnerService } from '../../services/spinner.service';

@Component({
    templateUrl: 'multiple-choice.component.html',
})

export class MultipleChoiceComponent implements OnInit {
    public studyRef: any;
    public question: Question;
    public NOUN: string = WordType[WordType.noun];
    public ADJECTIVE: string = WordType[WordType.adjective];
    public ANIMATE: string = Animate[Animate.animate];
    public animate: string;
    public isCorrect: boolean;
    public answer: string;

    constructor(
        private localStorage: LocalStorageService,
        private questionService: QuestionService,
        private spinner: SpinnerService,
    ) { }

    public check(answer) {
        if (!this.answer) {
            this.answer = answer;
            this.isCorrect = answer === this.question.correctAnswer;
            this.studyRef.progressService.answer(this.isCorrect);
        }
    }

    public ngOnInit() {
        this.spinner.loading = true;
        this.questionService.getQuestion(this.studyRef.studyOptions).then((data) => {
            this.question = data;
            this.spinner.loading = false;
            this.animate = this.question.wordType === 'noun' ? Animate[this.question.word.animate] : '';
        });
    }
}
