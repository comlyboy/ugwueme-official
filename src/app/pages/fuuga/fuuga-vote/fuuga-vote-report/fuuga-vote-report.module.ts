import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuugaVoteReportRoutingModule } from './fuuga-vote-report-routing.module';
import { FuugaVoteReportComponent } from './fuuga-vote-report.component';
import { PaginatorModule } from 'src/app/components/paginator/paginator.module';


@NgModule({
  declarations: [
    FuugaVoteReportComponent
  ],
  imports: [
    CommonModule,
    FuugaVoteReportRoutingModule,
    PaginatorModule
  ]
})
export class FuugaVoteReportModule { }
