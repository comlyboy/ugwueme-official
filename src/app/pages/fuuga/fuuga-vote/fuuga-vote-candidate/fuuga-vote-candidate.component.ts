import { Component, OnInit } from '@angular/core';

import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'app-fuuga-vote-candidate',
  templateUrl: './fuuga-vote-candidate.component.html',
  styleUrls: ['./fuuga-vote-candidate.component.scss']
})
export class FuugaVoteCandidateComponent implements OnInit {

  constructor(
    private utilityService: UtilityService
  ) { }

  ngOnInit(): void {
    this.utilityService.setPageTitle('Election condidates • FUUGA')
  }

}
