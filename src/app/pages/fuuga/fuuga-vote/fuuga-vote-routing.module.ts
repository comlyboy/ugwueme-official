import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuugaVoteComponent } from './fuuga-vote.component';

const routes: Routes = [
  {
    path: '',
    component: FuugaVoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuugaVoteRoutingModule { }
