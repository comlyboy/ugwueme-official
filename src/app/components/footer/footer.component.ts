import { Component, OnChanges } from '@angular/core';

import { NavigationService } from 'src/app/service/navigation.service';
import { ElectivePositionArray, ElectivePositionEnum } from 'src/app/pages/fuuga/fuuga-vote/fuuga-vote-candidate/fuuga-vote-candidate.interface';
import { AuthService } from 'src/app/pages/auth/auth.service';
import { FuugaVoteService } from 'src/app/pages/fuuga/fuuga-vote/fuuga-vote.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnChanges {
  currentPosition = 1;
  isCommittee = false;
  selectedVotingPosition: any;
  pages = [
    { title: 'Dashboard', link: 'fuuga/election/dashboard', icon: 'speedometer' },
    { title: 'Voters', link: 'fuuga/election/voters', icon: 'people-fill' },
    { title: 'Candidates', link: 'fuuga/election/candidates', icon: 'person-rolodex' },
    { title: 'Votes', link: 'fuuga/election/votes', icon: 'tags-fill' },
    { title: 'Settings', link: 'fuuga/election/settings', icon: 'gear-fill' },
  ];

  positionArray = ElectivePositionArray;

  constructor(
    private authService: AuthService,
    private fuugaVoteService: FuugaVoteService
  ) {


  }


  onNext() {
    const position = this.currentPosition + 1;
    if (position <= this.positionArray.length) {

      this.currentPosition = position;

      this.selectedVotingPosition = this.positionArray[position - 1];
      this.fuugaVoteService.getCanditatesByOffice(this.selectedVotingPosition.value);
    }
  }

  onPrevious() {
    if (this.currentPosition > 1) {
      const position = this.currentPosition - 1;

      this.currentPosition = position;

      this.selectedVotingPosition = this.positionArray[position - 1];
      this.fuugaVoteService.getCanditatesByOffice(this.selectedVotingPosition.value);
    }
  }
  
  ngOnChanges() {
    
  }
  
  private initContent() {
    this.selectedVotingPosition = this.positionArray[this.currentPosition - 1];
    this.fuugaVoteService.getCanditatesByOffice(this.selectedVotingPosition.value);

    this.authService.automaticAuthenticateUser();

    this.authService.userisCommitteeListener
      .subscribe(userisCommittee => {
        this.isCommittee = userisCommittee;
      });
  }

  ngOnInit() {
    this.initContent();
  }


}
