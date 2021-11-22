import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuugaHomeRoutingModule } from './fuuga-home-routing.module';
import { FuugaHomeComponent } from './fuuga-home.component';


@NgModule({
  declarations: [
    FuugaHomeComponent
  ],
  imports: [
    CommonModule,
    FuugaHomeRoutingModule
  ]
})
export class FuugaHomeModule { }
