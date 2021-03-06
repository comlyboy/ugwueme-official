import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';


const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
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
  // {
  //   path: 'register',
  //   loadChildren: () => import('../../auth/signup/signup.module')
  //     .then(m => m.SignupModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('../../auth/login/login.module')
      .then(m => m.LoginModule)
  },

  {
    path: 'dashboard',
    canLoad: [AuthGuard],
    loadChildren: () => import('./fuuga-vote-dashboard/fuuga-vote-dashboard.module')
      .then(m => m.FuugaVoteDashboardModule)
  },
  {
    path: 'voters',
    canLoad: [AuthGuard],
    loadChildren: () => import('./fuuga-voter/fuuga-voter.module')
      .then(m => m.FuugaVoterModule)
  },
  {
    path: 'votes',
    canLoad: [AuthGuard],
    loadChildren: () => import('./fuuga-votes/fuuga-votes.module')
      .then(m => m.FuugaVotesModule)
  },
  {
    path: 'results',
    // canLoad: [AuthGuard],
    loadChildren: () => import('./fuuga-vote-report/fuuga-vote-report.module')
      .then(m => m.FuugaVoteReportModule)
  },
  {
    path: 'candidates',
    canLoad: [AuthGuard],
    loadChildren: () => import('./fuuga-vote-candidate/fuuga-vote-candidate.module')
      .then(m => m.FuugaVoteCandidateModule)
  },
  {
    path: 'candidates_list',
    // canLoad: [AuthGuard],
    loadChildren: () => import('./fuuga-vote-candidate-public/fuuga-vote-candidate-public.module')
      .then(m => m.FuugaVoteCandidatePublicModule)
  },
  {
    path: 'cast_you_vote',
    // canLoad: [AuthGuard],
    loadChildren: () => import('./fuuga-vote-cast/fuuga-vote-cast.module')
      .then(m => m.FuugaVoteCastModule)
  },
  {
    path: 'settings',
    canLoad: [AuthGuard],
    loadChildren: () => import('./fuuga-vote-setting/fuuga-vote-setting.module')
      .then(m => m.FuugaVoteSettingModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuugaVoteRoutingModule { }
