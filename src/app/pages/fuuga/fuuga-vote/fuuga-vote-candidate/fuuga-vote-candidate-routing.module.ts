import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuugaVoteCandidateComponent } from './fuuga-vote-candidate.component';

const routes: Routes = [
  {
    path: '',
    component: FuugaVoteCandidateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuugaVoteCandidateRoutingModule { }
