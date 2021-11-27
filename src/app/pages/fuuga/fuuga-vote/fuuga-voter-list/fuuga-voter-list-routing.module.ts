import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuugaVoterListComponent } from './fuuga-voter-list.component';

const routes: Routes = [
  {
    path: '',
    component: FuugaVoterListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuugaVoterListRoutingModule { }
