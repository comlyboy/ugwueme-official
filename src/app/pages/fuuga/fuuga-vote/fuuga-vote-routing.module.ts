import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard',
    // canLoad: [AuthGuard],
    loadChildren: () => import('./fuuga-vote-dashboard/fuuga-vote-dashboard.module')
      .then(m => m.FuugaVoteDashboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuugaVoteRoutingModule { }
