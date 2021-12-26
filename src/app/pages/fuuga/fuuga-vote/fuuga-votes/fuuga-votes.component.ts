import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UtilityService } from 'src/app/service/utility.service';
import { FuugaVoteService } from '../fuuga-vote.service';
import { IVoter } from '../fuuga-voter/fuuga-voter.interface';
import { IVote } from './fuuga-votes.interface';

@Component({
  selector: 'app-fuuga-votes',
  templateUrl: './fuuga-votes.component.html',
  styleUrls: ['./fuuga-votes.component.scss']
})
export class FuugaVotesComponent implements OnInit {
  // voters: IVoter[] = [];

  totalVotes = 0;
  votes: IVote[] = [];

  recordSub: Subscription;
  recordSub2: Subscription;

  votersPerPage = 10;
  currentPage = 1;

  filterByVerified: number;

  constructor(
    private fuugaVoteService: FuugaVoteService,
    private utilityService: UtilityService
  ) { }





  initContent() {
    this.fuugaVoteService.getVotes();
    // this.recordSub = this.fuugaVoteService.getVotersUpdateListener()
    //   .subscribe(data => {
    //     this.voters = data.voters;
    //     this.totalVotes = data.totalVoters;
    //   });


    this.recordSub2 = this.fuugaVoteService.getVotesUpdateListener()
      .subscribe(data => {
        this.votes = data.votes;
        this.totalVotes = data.totalVotes;
      });




    this.utilityService.setPageTitle('Votes • FUUGA')
  }




  ngOnInit(): void {
    // this.initContent();
  }


}
