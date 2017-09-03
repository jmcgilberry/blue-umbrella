import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { WordGender } from '../models/enums';
import { ModelMap } from '../models/model-map';
import { Noun } from '../models/noun';
import { RandomService } from './random.service';

@Injectable()
export class NounService {
    private noun = new Noun();
    private nouns: Noun[];
    private masculineNouns: Noun[];
    private feminineNouns: Noun[];
    private neuterNouns: Noun[];
    private modelMap: ModelMap = new ModelMap();

    constructor(private http: HttpClient, private rnd: RandomService) { }

    public load(wordGender: WordGender) {
        return new Promise<Noun[]>((resolve, reject) => {
            try {
                if (!this.nouns) {
                    this.http.get<Noun[]>('../../assets/json/nouns.json').subscribe((data) => {
                        this.nouns = data;
                        this.masculineNouns = this.nouns.filter((noun) => {
                            return noun.gender === this.modelMap[WordGender[WordGender.masculine]];
                        });
                        this.feminineNouns = this.nouns.filter((noun) => {
                            return noun.gender === this.modelMap[WordGender[WordGender.feminine]];
                        });
                        this.neuterNouns = this.nouns.filter((noun) => {
                            return noun.gender === this.modelMap[WordGender[WordGender.neuter]];
                        });
                        resolve(this[WordGender[wordGender] + 'Nouns']);
                    });
                } else {
                    resolve(this[WordGender[wordGender] + 'Nouns']);
                }
            } catch (error) {
                reject('There was an error retreiving Nouns');
            }
        });
    }

    public getRandom(wordGender: WordGender) {
        return new Promise<Noun>((resolve, reject) => {
            try {
                this.load(wordGender).then((data) => {
                    resolve(this.rnd.get(data));
                });
            } catch (error) {
                reject('There was an error getting random Noun');
            }
        });
    }
}
