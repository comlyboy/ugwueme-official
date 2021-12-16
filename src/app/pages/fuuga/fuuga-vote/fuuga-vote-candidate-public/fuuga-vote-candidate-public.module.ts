import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuugaVoteCandidatePublicRoutingModule } from './fuuga-vote-candidate-public-routing.module';
import { FuugaVoteCandidatePublicComponent } from './fuuga-vote-candidate-public.component';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    FuugaVoteCandidatePublicComponent
  ],
  imports: [
    CommonModule,
    FuugaVoteCandidatePublicRoutingModule,
    PipesModule
  ]
})
export class FuugaVoteCandidatePublicModule { }
