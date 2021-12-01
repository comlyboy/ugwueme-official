import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuugaVoteCandidateRoutingModule } from './fuuga-vote-candidate-routing.module';
import { FuugaVoteCandidateComponent } from './fuuga-vote-candidate.component';


@NgModule({
  declarations: [
    FuugaVoteCandidateComponent
  ],
  imports: [
    CommonModule,
    FuugaVoteCandidateRoutingModule
  ]
})
export class FuugaVoteCandidateModule { }
