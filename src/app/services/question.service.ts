import { Injectable } from '@angular/core';

import { Adjective } from '../models/adjective';
import { Animate, WordCase, WordGender, WordQuantity, WordType } from '../models/enums';
import { ModelMap } from '../models/model-map';
import { Noun } from '../models/noun';
import { Question } from '../models/question';
import { StudyOptions } from '../models/study-options';
import { AdjectiveService } from './adjective.service';
import { NounService } from './noun.service';
import { RandomService } from './random.service';

@Injectable()
export class QuestionService {
    private question = new Question();
    private modelMap = new ModelMap();
    private answerProperty: string;
    private otherAnswerFields: string[];

    constructor(
        private nounService: NounService,
        private adjectiveService: AdjectiveService,
        private rnd: RandomService) { }

    public getQuestion(studyOptions: StudyOptions) {
        return new Promise<Question>((resolve, reject) => {
            try {
                this.initializeQuestion(studyOptions);
                if (this.question.wordType === WordType[WordType.noun]) {
                    this.getNoun().then((data) => {
                        this.question.word = data;
                        this.loadQuestion(studyOptions);
                        resolve(this.question);
                    });
                } else if (this.question.wordType === WordType[WordType.adjective]) {
                    this.getAdjective().then((data) => {
                        this.question.word = data;
                        this.loadQuestion(studyOptions);
                        resolve(this.question);
                    });
                }
            } catch (e) {
                reject('There was an error generating Question');
            }
        });
    }

    private loadQuestion(studyOptions: StudyOptions) {
        this.getCorrectAnswer(studyOptions);
        this.question.allAnswers = [ ];
        this.otherAnswerFields = this.question.wordType === WordType[WordType.noun] ?
            [ 'sNom', 'sGen', 'sDat', 'sAcc', 'sInst', 'sPrep', 'pNom', 'pGen', 'pDat', 'pAcc', 'pInst', 'pPrep' ] :
            [ 'fNom', 'fGen', 'fDat', 'fAcc', 'fInst', 'fPrep', 'nNom', 'nGen', 'nDat', 'nAcc', 'nInst', 'nPrep',
            'mNom', 'mGen', 'mDat', 'mAcc', 'mInst', 'mPrep', 'pNom', 'pGen', 'pDat', 'pAcc', 'pInst', 'pPrep' ];
        this.getOtherAnswers(studyOptions, this.answerProperty);
        this.insertCorrectAnswer();
    }

    private initializeQuestion(studyOptions: StudyOptions) {
        this.question.wordType = this.rnd.get(studyOptions.wordTypes);
        this.question.wordQuantity = this.rnd.get(studyOptions.wordQuantities);
        this.question.wordCase = this.rnd.get(studyOptions.wordCases);
        this.question.wordGender = this.rnd.get(studyOptions.genders);
    }

    private insertCorrectAnswer() {
        this.question.allAnswers.splice(Math.floor(Math.random() * 4), 0, this.question.correctAnswer);
    }

    private getCorrectAnswer(studyOptions: StudyOptions) {
        let prefix = this.modelMap[this.question.wordQuantity];

        if (this.question.wordType === WordType[WordType.adjective] &&
            this.question.wordQuantity !== WordQuantity[WordQuantity.plural]) {
            prefix = this.modelMap[this.question.wordGender];
        }

        this.answerProperty = prefix + this.modelMap[this.question.wordCase];
        this.question.correctAnswer = this.question.word[this.answerProperty];
    }

    private getOtherAnswers(studyOptions: StudyOptions, removeItem: string) {
        while (this.question.allAnswers.length < 3 && this.otherAnswerFields.length > 0) {
            const index = this.otherAnswerFields.indexOf(removeItem, 0);
            if (index > -1) {
                this.otherAnswerFields.splice(index, 1);
            }

            const rndField = this.rnd.get(this.otherAnswerFields);

            if (!this.question.allAnswers.some((x) => x === this.question.word[rndField]) &&
                this.question.correctAnswer !== this.question.word[rndField]) {
                this.question.allAnswers.push(this.question.word[rndField]);
            }

            this.getOtherAnswers(studyOptions, rndField);
        }
    }

    private getNoun() {
        return new Promise<Noun>((resolve, reject) => {
            try {
                this.nounService.getRandom(WordGender[this.question.wordGender]).then((data) => {
                    resolve(data);
                });
            } catch (e) {
                const msg = 'There was an error getting Noun';
                reject(msg);
            }
        });
    }

    private getAdjective() {
        return new Promise<Adjective>((resolve, reject) => {
            try {
                this.adjectiveService.getRandom().then((data) => {
                    resolve(data);
                });
            } catch (e) {
                reject('There was an error getting Adjective');
            }
        });
    }
}
