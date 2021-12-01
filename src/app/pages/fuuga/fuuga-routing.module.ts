import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // {
  //   path: '', redirectTo: '', pathMatch: 'full'
  // },
   {
    path: '',
    loadChildren: () => import('./fuuga-home/fuuga-home.module')
      .then(m => m.FuugaHomeModule)
  },
   {
    path: 'election',
    loadChildren: () => import('./fuuga-vote/fuuga-vote.module')
      .then(m => m.FuugaVoteModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuugaRoutingModule { }
