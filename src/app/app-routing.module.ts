import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { CreditsComponent } from './components/credits/credits.component';
import { HomeComponent } from './components/home/home.component';
import { StudyComponent } from './components/study/study.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
    pathMatch: 'full'
  },
  {
    component: CreditsComponent,
    path: 'credits',
    pathMatch: 'full'
  },
  {
    component: StudyComponent,
    path: 'study',
    pathMatch: 'full'
  },
  {
    component: PageNotFoundComponent,
    path: '**'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
