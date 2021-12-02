import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { UtilityService } from 'src/app/service/utility.service';
import { FuugaVoteService } from '../fuuga-vote.service';

@Component({
  selector: 'app-fuuga-vote-dashboard',
  templateUrl: './fuuga-vote-dashboard.component.html',
  styleUrls: ['./fuuga-vote-dashboard.component.scss']
})
export class FuugaVoteDashboardComponent implements OnInit, OnDestroy {

  isLoading = false;

  totalVoters = 0;
  totalVerifiedVoters = 0;
  totalVotes = 0;
  totalCandidates = 0;
  completionRatePercentage = 0;
  metricsSub: Subscription;

  constructor(
    private fuugaVoteService: FuugaVoteService,
    private utilityService: UtilityService
  ) { }




  initContent() {
    this.fuugaVoteService.getMetrics()

    this.metricsSub = this.fuugaVoteService.getMetricsUpdateListener()
      .subscribe(data => {
        this.totalVoters = data.totalVoters;
        this.totalVotes = data.totalVotes;
        this.totalVerifiedVoters = data.totalVerifiedVoters;
        this.totalCandidates = data.totalCandidates;
      });

    this.utilityService.setPageTitle('FUUGA voting dashboard')
  }


  ngOnInit(): void {
    this.initContent();
  }

  ngOnDestroy() {
    this.metricsSub.unsubscribe();
  }

}
