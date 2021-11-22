import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuugaVoteRoutingModule } from './fuuga-vote-routing.module';
import { FuugaVoteComponent } from './fuuga-vote.component';


@NgModule({
  declarations: [
    FuugaVoteComponent
  ],
  imports: [
    CommonModule,
    FuugaVoteRoutingModule
  ]
})
export class FuugaVoteModule { }
