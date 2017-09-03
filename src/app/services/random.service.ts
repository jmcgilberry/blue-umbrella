import { Injectable } from '@angular/core';

@Injectable()
export class RandomService {
    private test: any[];

    public get(obj: any) {
        if (obj && Array.isArray(obj)) {
            const objLength = obj.length;
            const rnd = Math.floor(Math.random() * objLength);
            return obj[rnd];
        } else if (obj) {
            try {
                let allKeys: any[]; allKeys = Object.keys(obj);
                let keys: any[]; keys = [ ];
                // for (let i=0; i < allKeys.length; i++) {
                //     if (obj[allKeys[i]]) {
                //         keys.push(allKeys[i]);
                //     }
                // }
                for (const i of allKeys) {
                    if (obj[i]) {
                        keys.push(i);
                    }
                }
                return this.get(keys);
            } catch (e) {
                return null;
            }
        }
        return null;
    }
}
