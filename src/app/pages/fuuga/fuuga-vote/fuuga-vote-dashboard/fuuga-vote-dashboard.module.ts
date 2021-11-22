import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuugaVoteDashboardRoutingModule } from './fuuga-vote-dashboard-routing.module';
import { FuugaVoteDashboardComponent } from './fuuga-vote-dashboard.component';


@NgModule({
  declarations: [
    FuugaVoteDashboardComponent
  ],
  imports: [
    CommonModule,
    FuugaVoteDashboardRoutingModule
  ]
})
export class FuugaVoteDashboardModule { }
