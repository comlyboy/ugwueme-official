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
  candidates: ICandidate[] = [];
  totalCandidates = 0;

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
    this.fuugaVoteService.getVotes();

    this.recordSub = this.fuugaVoteService.getCandidatesUpdateListener()
      .subscribe(data => {
        this.candidates = data.candidates;
      });

    this.recordSub = this.fuugaVoteService.getVotesUpdateListener()
      .subscribe(data => {
        this.votes = data.votes;
      });

    this.utilityService.setPageTitle('Voters` result • FUUGA');
  }


  countVote(votes: IVote[], candidate: string) {
    return votes.filter(item => item.candidateId._id === candidate).length
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
