import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {


  constructor(
    private router: Router
  ) { }


  goToFuugaHome() {
    this.router.navigate(['/fuuga']);
  }

  goToLogin() {
    this.router.navigate(['/fuuga/election']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToDashboard() {
    this.router.navigate(['/fuuga/election/dashboard']);
  }




}
