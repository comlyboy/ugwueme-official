import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilityService } from 'src/app/service/utility.service';
import { ElectivePositionArray, ICandidate } from '../fuuga-vote-candidate/fuuga-vote-candidate.interface';
import { FuugaVoteService } from '../fuuga-vote.service';
import { IVote } from '../fuuga-votes/fuuga-votes.interface';

@Component({
  selector: 'app-fuuga-vote-report',
  templateUrl: './fuuga-vote-report.component.html',
  styleUrls: ['./fuuga-vote-report.component.scss']
})
export class FuugaVoteReportComponent implements OnInit, OnDestroy {
  votes: IVote[] = [];
  votesNoDuplicate: IVote[] = [];
  totalVoters = 0;

  positions = ElectivePositionArray;

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
    this.fuugaVoteService.getVotesResult();

    this.recordSub = this.fuugaVoteService.getVotesUpdateListener()
      .subscribe(data => {
        console.log(data);
        this.pickDuplicate(data.votes);

        // this.totalVoters = data.totalVoters!;
      });

    this.utilityService.setPageTitle('Voters` result • FUUGA');
  }


  pickDuplicate(arr: IVote[]) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
      // if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      //   if (!res.includes(arr[i])) {
      //     res.push(arr[i]);
      //   };
      // };
    };
    this.votes = res;
  };

  countVote(votes: IVote[], candidate: ICandidate) {
    return votes.filter(item => item.candidateId._id === candidate._id).length
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
