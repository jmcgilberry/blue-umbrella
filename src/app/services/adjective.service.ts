import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Adjective } from '../models/adjective';
import { RandomService } from './random.service';

@Injectable()
export class AdjectiveService {
    private adjective = new Adjective();
    private adjectives: Adjective[];

    constructor(private http: HttpClient, private rnd: RandomService) { }

    public load() {
        return new Promise<Adjective[]>((resolve, reject) => {
            try {
                if (!this.adjectives) {
                    this.http.get<Adjective[]>('../../assets/json/adjectives.json').subscribe((data) => {
                        this.adjectives = data;
                        resolve(this.adjectives);
                    });
                } else {
                    resolve(this.adjectives);
                }
            } catch (error) {
                reject('There was an error retreiving Adjectives');
            }
        });
    }

    public getRandom() {
        return new Promise<Adjective>((resolve, reject) => {
            try {
                this.load().then((data) => {
                    resolve(this.rnd.get(data));
                });
            } catch (error) {
                reject('There was an error getting random Adjective');
            }
        });
    }
}
