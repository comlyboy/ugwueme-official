import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FuugaVoterRegisterRoutingModule } from './fuuga-voter-register-routing.module';
import { FuugaVoterRegisterComponent } from './fuuga-voter-register.component';


@NgModule({
  declarations: [
    FuugaVoterRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FuugaVoterRegisterRoutingModule
  ]
})
export class FuugaVoterRegisterModule { }
