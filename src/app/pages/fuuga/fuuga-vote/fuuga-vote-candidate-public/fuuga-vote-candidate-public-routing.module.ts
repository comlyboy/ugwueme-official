import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuugaVoteCandidatePublicComponent } from './fuuga-vote-candidate-public.component';

const routes: Routes = [
  {
    path: '',
    component: FuugaVoteCandidatePublicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuugaVoteCandidatePublicRoutingModule { }
