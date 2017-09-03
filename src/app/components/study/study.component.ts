import {
    AfterContentInit,
    Component,
    ComponentFactoryResolver,
    DoCheck,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';

import { HostDirective } from '../../directives/host.directive';
import { StudyOptions } from '../../models/study-options';
import { LocalStorageService } from '../../services/local-storage.service';
import { ProgressService } from '../../services/progress.service';
import { MultipleChoiceComponent } from '../multiple-choice/multiple-choice.component';
import { StudyOptionsComponent } from '../studyOptions/study-options.component';

@Component({
    selector: 'app-study',
    templateUrl: './study.component.html',
})

export class StudyComponent implements AfterContentInit, OnInit {
    @ViewChild(HostDirective) public hostDirective: HostDirective;
    public studyOptions: StudyOptions = new StudyOptions();
    private componentRef: any;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private localStorage: LocalStorageService,
        private progressService: ProgressService) { }

    public ngOnInit() {
        this.studyOptions = this.studyOptions = this.localStorage.get('studyOptions') || new StudyOptions();
    }

    public ngAfterContentInit() {
        this.loadComponent(StudyOptionsComponent);
    }

    public studyView() {
        this.loadComponent(MultipleChoiceComponent);
    }

    public studyOptionsView() {
        this.loadComponent(StudyOptionsComponent);
    }

    public restartStudyView() {
        this.progressService.reset();
        this.studyView();
    }

    private loadComponent(component) {
        if (this.componentRef) {
            this.componentRef.destroy();
        }

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

        const viewContainerRef = this.hostDirective.viewContainerRef;
        this.componentRef = viewContainerRef.createComponent(componentFactory);

        (this.componentRef as any).instance.studyRef = this;
    }
}
