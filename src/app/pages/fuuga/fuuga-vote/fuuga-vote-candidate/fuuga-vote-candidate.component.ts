import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DialogService } from 'src/app/service/dialog.service';

import { UtilityService } from 'src/app/service/utility.service';
import { FuugaVoteService } from '../fuuga-vote.service';
import { IVoter } from '../fuuga-voter/fuuga-voter.interface';
import { ElectivePositionArray, ElectivePositionEnum, ICandidate, RegisterCandidateDto } from './fuuga-vote-candidate.interface';

@Component({
  selector: 'app-fuuga-vote-candidate',
  templateUrl: './fuuga-vote-candidate.component.html',
  styleUrls: ['./fuuga-vote-candidate.component.scss']
})
export class FuugaVoteCandidateComponent implements OnInit {
  candidates: ICandidate[] = [];
  totalCandidates = 0;
  voters: IVoter[] = [];

  candidatesPerPage = 16;
  currentPage = 1;
  filterByPosition: ElectivePositionEnum

  consdidateSub: Subscription;
  recordSub: Subscription;

  positions = ElectivePositionArray;

  constructor(
    private fuugaVoteService: FuugaVoteService,
    private utilityService: UtilityService,
    private dialogService: DialogService
  ) { }


  onSubmitCandidate(form: NgForm) {
    if (form.invalid) return;

    const candidateData = {
      position: form.value.inputPosition,
      voterId: form.value.inputVoter
    } as RegisterCandidateDto;

    this.fuugaVoteService.createCandidate(candidateData);
  }

  onSelectCandidate(candidateId: string) {

  }



  onFilter(event: any) {
    this.filterByPosition = event.target.value;

    this.fuugaVoteService.getCanditates(this.candidatesPerPage, this.currentPage, this.filterByPosition);
  }


  onChangePage(value: { newCurrentPage: number, newDataPerPage: number }) {
    this.currentPage = value.newCurrentPage;
    this.candidatesPerPage = value.newDataPerPage;

    this.fuugaVoteService.getCanditates(this.candidatesPerPage, this.currentPage, this.filterByPosition);
  }



  initContent() {
    this.fuugaVoteService.getCanditates(this.candidatesPerPage, this.currentPage, this.filterByPosition);

    this.fuugaVoteService.getVoters(1000, 1);

    this.recordSub = this.fuugaVoteService.getVotersUpdateListener()
      .subscribe(data => {
        this.voters = data.voters;
        // this.totalVoters = data.totalVoters;
      });


    this.consdidateSub = this.fuugaVoteService.getCandidatesUpdateListener()
      .subscribe(data => {
        console.log(data)
        this.candidates = data.candidates;
        this.totalCandidates = data.totalCandidates;
      });

    this.utilityService.setPageTitle('Election condidates • FUUGA');
  }


  ngOnInit(): void {
    this.initContent();
  }




}
