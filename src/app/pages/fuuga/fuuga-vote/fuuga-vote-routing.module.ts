import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  // {
  //   path: 'voter/register',
  //   // canLoad: [AuthGuard],
  //   loadChildren: () => import('./fuuga-voter-register/fuuga-voter-register.module')
  //     .then(m => m.FuugaVoterRegisterModule)
  // },
  {
    path: 'voter',
    children: [
      {
        path: 'register',
        // canActivate: [AuthGuard],
        loadChildren: () =>
          import('./fuuga-voter-register/fuuga-voter-register.module')
            .then(m => m.FuugaVoterRegisterModule)
      }
    ]
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
