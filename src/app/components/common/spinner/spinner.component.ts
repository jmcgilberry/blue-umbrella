import { Component, Input } from '@angular/core';

import { SpinnerService } from '../../../services/spinner.service';

@Component({
    selector: 'app-spinner',
    styleUrls: [ './spinner.component.scss' ],
    templateUrl: './spinner.component.html',
})

export class SpinnerComponent {
    constructor(public spinner: SpinnerService) { }
}
