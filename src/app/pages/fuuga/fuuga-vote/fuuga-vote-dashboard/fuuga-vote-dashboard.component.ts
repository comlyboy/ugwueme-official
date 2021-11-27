import { Component, OnInit } from '@angular/core';

import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'app-fuuga-vote-dashboard',
  templateUrl: './fuuga-vote-dashboard.component.html',
  styleUrls: ['./fuuga-vote-dashboard.component.scss']
})
export class FuugaVoteDashboardComponent implements OnInit {

  isLoading = false;

  totalIncome = 0;
  totalEngineers = 0;
  totalBranches = 0;
  totalCustomers = 0;
  totalTransactions = 0;



  totalJobsInProgress = 0;
  totalJobsRepaired = 0;
  totalJobsUnrepaired = 0;
  totalJobsCollected = 0;
  totalJobsReturned = 0;

  completionRatePercentage = 0;

  constructor(
    private utilityService: UtilityService
  ) { }

  ngOnInit(): void {
    this.utilityService.setPageTitle('FUUGA voting dashboard')
  }

}
