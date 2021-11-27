import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuugaVoterRegisterComponent } from './fuuga-voter-register.component';

const routes: Routes = [
  {
    path: '',
    component: FuugaVoterRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuugaVoterRegisterRoutingModule { }
