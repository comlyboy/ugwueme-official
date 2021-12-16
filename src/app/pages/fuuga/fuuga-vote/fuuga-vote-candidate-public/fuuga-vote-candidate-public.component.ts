import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DialogService } from 'src/app/service/dialog.service';
import { UtilityService } from 'src/app/service/utility.service';
import { ICandidate, ElectivePositionEnum, ElectivePositionArray, RegisterCandidateDto } from '../fuuga-vote-candidate/fuuga-vote-candidate.interface';
import { FuugaVoteService } from '../fuuga-vote.service';
import { IVoter } from '../fuuga-voter/fuuga-voter.interface';

@Component({
  selector: 'app-fuuga-vote-candidate-public',
  templateUrl: './fuuga-vote-candidate-public.component.html',
  styleUrls: ['./fuuga-vote-candidate-public.component.scss']
})
export class FuugaVoteCandidatePublicComponent implements OnInit {
  candidate: ICandidate;
  candidates: ICandidate[] = [];
  totalCandidates = 0;

  candidatesPerPage = 30;
  currentPage = 1;
  filterByPosition: ElectivePositionEnum

  candidateSub: Subscription;

  positions = ElectivePositionArray;


  constructor(
    private fuugaVoteService: FuugaVoteService,
    private utilityService: UtilityService
  ) { }


  onSelectCandidate(candidateId: string) {
    const candidate = this.candidates.find(item => item._id === candidateId);
    this.candidate = candidate!;
  }


  onFilter(event: any) {
    this.filterByPosition = event.target.value;

    this.fuugaVoteService.getCanditates(this.candidatesPerPage, this.currentPage, this.filterByPosition);
  }



  initContent() {
    this.fuugaVoteService.getCanditatesPublic()
      .subscribe(data => {
        this.candidates = data.data.candidates;
        this.totalCandidates = data.data.totalCandidates;
      });

    this.utilityService.setPageTitle('Election condidates • FUUGA');
  }


  ngOnInit(): void {
    this.initContent();
  }


  ngOnDestroy() {
    this.candidateSub.unsubscribe();
  }


}
