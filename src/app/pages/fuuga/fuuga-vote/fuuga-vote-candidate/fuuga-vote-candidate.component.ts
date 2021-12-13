import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class FuugaVoteCandidateComponent implements OnInit, OnDestroy {
  candidates: ICandidate[] = [];
  totalCandidates = 0;
  voters: IVoter[] = [];

  candidatesPerPage = 16;
  currentPage = 1;
  filterByPosition: ElectivePositionEnum

  candidateSub: Subscription;
  recordSub: Subscription;

  positions = ElectivePositionArray;

  selectedImage: string;

  constructor(
    private fuugaVoteService: FuugaVoteService,
    private utilityService: UtilityService,
    private dialogService: DialogService
  ) { }


  onSubmitCandidate(form: NgForm) {
    if (form.invalid) return;

    const candidateData: RegisterCandidateDto = {
      image: form.value.inputImage,
      position: form.value.inputPosition,
      manifesto: form.value.inputManifesto,
      voterId: form.value.inputVoter
    };

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
        const voters = data.voters;
        this.voters = voters.filter(item => item.isVerified);
      });


    this.candidateSub = this.fuugaVoteService.getCandidatesUpdateListener()
      .subscribe(data => {
        this.candidates = data.candidates;
        this.totalCandidates = data.totalCandidates;
      });

    this.utilityService.setPageTitle('Election condidates • FUUGA');
  }


  ngOnInit(): void {
    this.initContent();
  }



  ngOnDestroy() {
    this.candidateSub.unsubscribe();
    this.recordSub.unsubscribe();
  }


}
