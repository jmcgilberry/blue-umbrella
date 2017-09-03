import { Component } from '@angular/core';
import { VERSION } from '@angular/core';

@Component({
    selector: './app-credits',
    styleUrls: [ './credits.component.scss' ],
    templateUrl: './credits.component.html',
})

export class CreditsComponent {
    public version = VERSION.full;
}
