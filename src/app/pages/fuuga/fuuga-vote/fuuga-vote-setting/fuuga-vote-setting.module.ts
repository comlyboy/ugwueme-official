import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuugaVoteSettingRoutingModule } from './fuuga-vote-setting-routing.module';
import { FuugaVoteSettingComponent } from './fuuga-vote-setting.component';


@NgModule({
  declarations: [
    FuugaVoteSettingComponent
  ],
  imports: [
    CommonModule,
    FuugaVoteSettingRoutingModule
  ]
})
export class FuugaVoteSettingModule { }
