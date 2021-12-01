import { Component, OnInit } from '@angular/core';

import { UtilityService } from 'src/app/service/utility.service';
import { FuugaVoteService } from '../fuuga-vote.service';

@Component({
  selector: 'app-fuuga-vote-dashboard',
  templateUrl: './fuuga-vote-dashboard.component.html',
  styleUrls: ['./fuuga-vote-dashboard.component.scss']
})
export class FuugaVoteDashboardComponent implements OnInit {

  isLoading = false;

  totalVoters = 0;
  totalVerifiedVoters = 0;
  totalVotes = 0;
  totalCandidates = 0;
  completionRatePercentage = 0;

  constructor(
    private fuugaVoteService: FuugaVoteService,
    private utilityService: UtilityService
  ) { }

  ngOnInit(): void {
    this.utilityService.setPageTitle('FUUGA voting dashboard')
  }

}
