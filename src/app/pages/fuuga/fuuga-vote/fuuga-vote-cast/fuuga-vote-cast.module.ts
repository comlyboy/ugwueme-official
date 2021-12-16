import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuugaVoteCastRoutingModule } from './fuuga-vote-cast-routing.module';
import { FuugaVoteCastComponent } from './fuuga-vote-cast.component';


@NgModule({
  declarations: [
    FuugaVoteCastComponent
  ],
  imports: [
    CommonModule,
    FuugaVoteCastRoutingModule
  ]
})
export class FuugaVoteCastModule { }
