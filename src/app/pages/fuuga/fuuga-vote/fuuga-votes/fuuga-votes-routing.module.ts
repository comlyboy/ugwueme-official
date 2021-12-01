import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuugaVotesComponent } from './fuuga-votes.component';

const routes: Routes = [
  {
    path: '',
    component: FuugaVotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuugaVotesRoutingModule { }
