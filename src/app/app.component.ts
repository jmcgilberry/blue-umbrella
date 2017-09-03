import { Component } from '@angular/core';

import { AdjectiveService } from './services/adjective.service';
import { LocalStorageService } from './services/local-storage.service';
import { NounService } from './services/noun.service';
import { ProgressService } from './services/progress.service';
import { QuestionService } from './services/question.service';
import { RandomService } from './services/random.service';
import { SpinnerService } from './services/spinner.service';

@Component({
  providers: [
    LocalStorageService,
    QuestionService,
    NounService,
    AdjectiveService,
    RandomService,
    ProgressService,
    SpinnerService
  ],
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title = 'app';
}
