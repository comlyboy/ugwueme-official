import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuugaHomeComponent } from './fuuga-home.component';

const routes: Routes = [
  {
    path: '',
    component: FuugaHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuugaHomeRoutingModule { }
