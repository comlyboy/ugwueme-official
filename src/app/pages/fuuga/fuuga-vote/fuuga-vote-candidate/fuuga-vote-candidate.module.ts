import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AngularEditorModule } from '@kolkov/angular-editor';

import { FuugaVoteCandidateRoutingModule } from './fuuga-vote-candidate-routing.module';
import { FuugaVoteCandidateComponent } from './fuuga-vote-candidate.component';
import { PaginatorModule } from 'src/app/components/paginator/paginator.module';
import { AvatarModule } from 'src/app/components/avatar/avatar.module';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    FuugaVoteCandidateComponent
  ],
  imports: [
    CommonModule,
    FuugaVoteCandidateRoutingModule,
    FormsModule,
    PaginatorModule,
    AvatarModule,
    PipesModule,
    AngularEditorModule
  ]
})
export class FuugaVoteCandidateModule { }
