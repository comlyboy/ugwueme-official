import { Component, OnChanges } from '@angular/core';

import { NavigationService } from 'src/app/service/navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnChanges {

  pages = [
    { title: 'Dashboard', link: 'fuuga/election/dashboard', icon: 'speedometer' },
    { title: 'Voters', link: 'fuuga/election/voters', icon: 'people-fill' },
    { title: 'Candidates', link: 'fuuga/election/candidates', icon: 'person-rolodex' },
    { title: 'Votes', link: 'fuuga/election/votes', icon: 'tags-fill' },
    // { title: 'Profile', link: 'fuuga/election/votes', icon: 'person-circle' },
  ];


  constructor(
    private navigationService: NavigationService
  ) { }


  ngOnChanges() {
  }

  private initContent() {

  }

  ngOnInit() {
    this.initContent();
  }


}
