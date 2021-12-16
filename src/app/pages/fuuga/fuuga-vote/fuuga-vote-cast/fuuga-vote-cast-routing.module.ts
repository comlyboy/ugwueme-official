import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuugaVoteCastComponent } from './fuuga-vote-cast.component';

const routes: Routes = [
  {
    path: '',
    component: FuugaVoteCastComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuugaVoteCastRoutingModule { }
