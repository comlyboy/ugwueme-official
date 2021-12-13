import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuugaVoteSettingComponent } from './fuuga-vote-setting.component';

const routes: Routes = [
  {
    path: '',
    component: FuugaVoteSettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuugaVoteSettingRoutingModule { }
