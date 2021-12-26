import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/pages/auth/auth.service';
import { DialogService } from 'src/app/service/dialog.service';
import { FuugaVoteService } from '../fuuga-vote.service';
import { UtilityService } from 'src/app/service/utility.service';
import { IVoter } from '../fuuga-voter/fuuga-voter.interface';
import { StorageService } from 'src/app/service/storage.service';
import { ElectivePositionEnum, ICandidate } from '../fuuga-vote-candidate/fuuga-vote-candidate.interface';
import { IVote } from '../fuuga-votes/fuuga-votes.interface';

@Component({
  selector: 'app-fuuga-vote-cast',
  templateUrl: './fuuga-vote-cast.component.html',
  styleUrls: ['./fuuga-vote-cast.component.scss']
})
export class FuugaVoteCastComponent implements OnInit {
  isReadyToVote = false;

  voter: IVoter;

  voteSub: Subscription;
  candidateSub: Subscription;

  candidates: ICandidate[] = [];
  totalCandidates: number;

  totalVotes = 0;
  votes: IVote[] = [];

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private fuugaVoteService: FuugaVoteService,
    private utilityService: UtilityService,
    private dialogService: DialogService
  ) { }


  onSelectCandidate(candidateId: string, position: ElectivePositionEnum) {
    this.fuugaVoteService.castVote(position, candidateId);
  }

  onSeeAllVotes() {
    this.fuugaVoteService.getVotesByVoter()
  }


  onSubmitVotes() {
    this.dialogService.submitVotesDialog();
  }


  onSubmitLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const secret = form.value.inputSecret.toLowerCase() as string
    this.authService.loginVoter(secret);
  }


  ngOnInit(): void {
    this.authService.automaticAuthenticateUser();
    this.authService.authenticationStatusListener
      .subscribe(auth => {
        if (auth) {
          this.isReadyToVote = auth;
          this.voter = this.storageService.getUserOBJ();
        }
      });

    this.candidateSub = this.fuugaVoteService.getCandidatesUpdateListener()
      .subscribe(data => {
        this.candidates = data.candidates;
        this.totalCandidates = data.totalCandidates;
      });

    this.voteSub = this.fuugaVoteService.getVotesUpdateListener()
      .subscribe(data => {
        this.votes = data.votes;
        this.totalVotes = data.totalVotes;
      });

  }


  ngOnDestroy() {
    if (this.voteSub) {
      this.voteSub.unsubscribe();
    }
    if (this.candidateSub) {
      this.candidateSub.unsubscribe();
    }
  }

}
