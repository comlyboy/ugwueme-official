import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuugaVoteDashboardComponent } from './fuuga-vote-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: FuugaVoteDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuugaVoteDashboardRoutingModule { }
