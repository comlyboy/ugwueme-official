import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuugaDashboardRoutingModule } from './fuuga-dashboard-routing.module';
import { FuugaDashboardComponent } from './fuuga-dashboard.component';


@NgModule({
  declarations: [
    FuugaDashboardComponent
  ],
  imports: [
    CommonModule,
    FuugaDashboardRoutingModule
  ]
})
export class FuugaDashboardModule { }
