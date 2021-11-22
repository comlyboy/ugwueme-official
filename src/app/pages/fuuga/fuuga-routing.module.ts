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
    path: 'voting',
    loadChildren: () => import('./fuuga-vote/fuuga-vote.module')
      .then(m => m.FuugaVoteModule)
  },
  {
    path: 'register',
    loadChildren: () => import('../auth/signup/signup.module')
      .then(m => m.SignupModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../auth/login/login.module')
      .then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuugaRoutingModule { }
