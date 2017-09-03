import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-panel',
    styleUrls: [ './panel.component.scss' ],
    templateUrl: './panel.component.html',
})

export class PanelComponent implements OnInit {
    @Input() public options: string;

    public ngOnInit() {
        this.options = 'full-panel ' + this.options;
    }
}
