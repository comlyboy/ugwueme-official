import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuugaVoterListRoutingModule } from './fuuga-voter-list-routing.module';
import { FuugaVoterListComponent } from './fuuga-voter-list.component';


@NgModule({
  declarations: [
    FuugaVoterListComponent
  ],
  imports: [
    CommonModule,
    FuugaVoterListRoutingModule
  ]
})
export class FuugaVoterListModule { }
