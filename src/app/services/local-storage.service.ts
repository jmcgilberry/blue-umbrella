import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    public get(key: string) {
        if (window.localStorage) {
            const value = JSON.parse(localStorage.getItem(key));
            return value;
        }
    }

    public set(key: string, value: any) {
        if (window.localStorage) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }
}
