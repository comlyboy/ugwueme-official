import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilityService } from 'src/app/service/utility.service';
import { FuugaVoteService } from '../fuuga-vote.service';
import { IVoter } from '../fuuga-voter/fuuga-voter.interface';

@Component({
  selector: 'app-fuuga-vote-report',
  templateUrl: './fuuga-vote-report.component.html',
  styleUrls: ['./fuuga-vote-report.component.scss']
})
export class FuugaVoteReportComponent implements OnInit, OnDestroy {
  voters: IVoter[] = [];
  totalVoters = 0;

  recordSub: Subscription;

  votersPerPage = 16;
  currentPage = 1;

  filterByVerified: number;
  
  constructor(
    private fuugaVoteService: FuugaVoteService,
    private utilityService: UtilityService,
  ) { }


  onChangePage(value: { newCurrentPage: number, newDataPerPage: number }) {
    this.currentPage = value.newCurrentPage;
    this.votersPerPage = value.newDataPerPage;

    this.fuugaVoteService.getVoters(this.votersPerPage, this.currentPage);
  }


  initContent() {
    this.fuugaVoteService.getVotersReport(this.votersPerPage, this.currentPage);

    this.recordSub = this.fuugaVoteService.getVotersUpdateListener()
      .subscribe(data => {
        console.log(data)
        this.voters = data.voters;
        this.totalVoters = data.totalVoters;
      });

    this.utilityService.setPageTitle('Voters` reports • FUUGA')
  }


  ngOnInit(): void {
    this.initContent();
  }


  ngOnDestroy() {
    if (this.recordSub) {
      this.recordSub.unsubscribe();
    }
  }

}
