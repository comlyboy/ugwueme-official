import { Component } from '@angular/core';

import { AuthService } from 'src/app/pages/auth/auth.service';
import { NavigationService } from 'src/app/service/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(
    private navigationService: NavigationService,
    private authService: AuthService
  ) { }


  onLogout() {
    this.authService.logout();
  }


}
