import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuugaVoteReportComponent } from './fuuga-vote-report.component';

const routes: Routes = [
  {
    path: '',
    component: FuugaVoteReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuugaVoteReportRoutingModule { }
