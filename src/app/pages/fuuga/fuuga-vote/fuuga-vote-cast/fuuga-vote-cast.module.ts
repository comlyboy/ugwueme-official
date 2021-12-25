import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FuugaVoteCastRoutingModule } from './fuuga-vote-cast-routing.module';
import { FuugaVoteCastComponent } from './fuuga-vote-cast.component';
import { AvatarModule } from 'src/app/components/avatar/avatar.module';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    FuugaVoteCastComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    FuugaVoteCastRoutingModule,
    AvatarModule,
    PipesModule
  ]
})
export class FuugaVoteCastModule { }
