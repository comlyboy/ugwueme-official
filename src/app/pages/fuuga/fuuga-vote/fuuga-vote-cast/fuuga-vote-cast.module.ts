import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FuugaVoteCastRoutingModule } from './fuuga-vote-cast-routing.module';
import { FuugaVoteCastComponent } from './fuuga-vote-cast.component';


@NgModule({
  declarations: [
    FuugaVoteCastComponent
  ],
  imports: [
    CommonModule,
    FuugaVoteCastRoutingModule,
    FormsModule
  ]
})
export class FuugaVoteCastModule { }
