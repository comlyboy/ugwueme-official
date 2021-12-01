import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuugaVotesRoutingModule } from './fuuga-votes-routing.module';
import { FuugaVotesComponent } from './fuuga-votes.component';


@NgModule({
  declarations: [
    FuugaVotesComponent
  ],
  imports: [
    CommonModule,
    FuugaVotesRoutingModule
  ]
})
export class FuugaVotesModule { }
