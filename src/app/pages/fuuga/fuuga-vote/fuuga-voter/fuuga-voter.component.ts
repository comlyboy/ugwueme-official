import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogService } from 'src/app/service/dialog.service';

import { UtilityService } from 'src/app/service/utility.service';
import { FuugaVoteService } from '../fuuga-vote.service';
import { IVoter } from './fuuga-voter.interface';

@Component({
  selector: 'app-fuuga-voter',
  templateUrl: './fuuga-voter.component.html',
  styleUrls: ['./fuuga-voter.component.scss']
})
export class FuugaVoterComponent implements OnInit {
  isDesktopView = false;

  voter: IVoter;
  voters: IVoter[] = [];
  totalVoters = 0;

  recordSub: Subscription;

  votersPerPage = 16;
  currentPage = 1;

  filterByVerified: number;

  constructor(
    private fuugaVoteService: FuugaVoteService,
    private utilityService: UtilityService,
    private dialogService: DialogService
  ) {
    this.isDesktopView = utilityService.getIsDesktopDevice();

  }


  onSelectVoter(voterId: string) {
    const voter = this.voters.find(item => item._id === voterId);
    this.voter = voter!;
  }

  onVerifyVoter(voterId: string) {
    this.dialogService.verifyVoterDialog(voterId);
  }


  onChangePage(value: { newCurrentPage: number, newDataPerPage: number }) {
    this.currentPage = value.newCurrentPage;
    this.votersPerPage = value.newDataPerPage;

    this.fuugaVoteService.getVoters(this.votersPerPage, this.currentPage);
  }


  initContent() {
    this.fuugaVoteService.getVoters(this.votersPerPage, this.currentPage);

    this.recordSub = this.fuugaVoteService.getVotersUpdateListener()
      .subscribe(data => {
        this.voters = data.voters;
        this.totalVoters = data.totalVoters;
      });

    this.utilityService.setPageTitle('Voters • FUUGA')
  }




  ngOnInit(): void {
    this.initContent();
  }


}
