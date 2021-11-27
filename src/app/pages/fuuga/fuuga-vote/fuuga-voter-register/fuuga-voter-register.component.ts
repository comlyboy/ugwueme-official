import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FuugaVoteService } from '../fuuga-vote.service';

import { VoterDto } from '../fuuga-voter-list/fuuga-voter.interface';

@Component({
  selector: 'app-fuuga-voter-register',
  templateUrl: './fuuga-voter-register.component.html',
  styleUrls: ['./fuuga-voter-register.component.scss']
})
export class FuugaVoterRegisterComponent implements OnInit {

  constructor(
    private fuugaVoteService: FuugaVoteService
  ) { }



  onRegisterVoter(form: NgForm) {

    const voterData: VoterDto = {
      firstName: form.value.inputFirstName,
      surName: form.value.inputSurName,
      kindred: form.value.inputKindred,
      schoolName: form.value.inputSchool,
      schoolLevel: form.value.inputSchLevel
    }

    this.fuugaVoteService.registerVoter(voterData);
  }

  ngOnInit(): void {
  }

}
