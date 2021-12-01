import { Component, OnInit } from '@angular/core';

import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'app-fuuga-voter',
  templateUrl: './fuuga-voter.component.html',
  styleUrls: ['./fuuga-voter.component.scss']
})
export class FuugaVoterComponent implements OnInit {

  constructor(
    private utilityService: UtilityService
  ) { }

  ngOnInit(): void {
    this.utilityService.setPageTitle('Voters • FUUGA')

  }

}
