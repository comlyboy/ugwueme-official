import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuugaVoterComponent } from './fuuga-voter.component';

const routes: Routes = [
  {
    path: '',
    component: FuugaVoterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuugaVoterRoutingModule { }
