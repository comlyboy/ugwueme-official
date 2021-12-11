import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuugaVoterRoutingModule } from './fuuga-voter-routing.module';
import { FuugaVoterComponent } from './fuuga-voter.component';
import { PaginatorModule } from 'src/app/components/paginator/paginator.module';
import { AvatarModule } from 'src/app/components/avatar/avatar.module';


@NgModule({
  declarations: [
    FuugaVoterComponent
  ],
  imports: [
    CommonModule,
    FuugaVoterRoutingModule,
    PaginatorModule,
    AvatarModule
  ]
})
export class FuugaVoterModule { }
