import { AfterContentInit, Component, DoCheck, Input } from '@angular/core';

import { LocalStorageService } from '../../services/local-storage.service';

@Component({
    providers: [ LocalStorageService ],
    styleUrls: [ './study-options.component.scss' ],
    templateUrl: './study-options.component.html',
})

export class StudyOptionsComponent implements AfterContentInit, DoCheck {
    public studyRef: any;

    constructor(private localStorage: LocalStorageService) { }

    public ngAfterContentInit() {
        this.studyRef.progressService.reset();
    }

    public ngDoCheck() {
        this.localStorage.set('studyOptions', this.studyRef.studyOptions);
     }

    public allChecked(property: string) {
        let allChecked = true;
        for (const value in this.studyRef.studyOptions[property]) {
            if (!this.studyRef.studyOptions[property][value]) {
                allChecked = false;
            }
        }

        return allChecked;
    }

    public anyChecked(property: string) {
        let anyChecked = false;
        for (const value in this.studyRef.studyOptions[property]) {
            if (this.studyRef.studyOptions[property][value]) {
                anyChecked = true;
            }
        }

        return anyChecked;
    }

    public setAll(property: string) {
        const value = !this.allChecked(property);
        for (const subProperty in this.studyRef.studyOptions[property]) {
            if (subProperty) {
                this.studyRef.studyOptions[property][subProperty] = value;
            }
        }
    }

    public isValidForm() {
        const isValid = this.anyChecked('wordTypes') &&
                        this.anyChecked('wordQuantities') &&
                        this.anyChecked('wordCases') &&
                        this.anyChecked('genders');
        return isValid;
    }
}
