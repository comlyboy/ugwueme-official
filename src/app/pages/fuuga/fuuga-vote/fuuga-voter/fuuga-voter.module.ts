import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuugaVoterRoutingModule } from './fuuga-voter-routing.module';
import { FuugaVoterComponent } from './fuuga-voter.component';


@NgModule({
  declarations: [
    FuugaVoterComponent
  ],
  imports: [
    CommonModule,
    FuugaVoterRoutingModule
  ]
})
export class FuugaVoterModule { }
