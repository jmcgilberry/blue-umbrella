import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerService {
    public loading: boolean;

    constructor() {
        this.loading = false;
     }
}
