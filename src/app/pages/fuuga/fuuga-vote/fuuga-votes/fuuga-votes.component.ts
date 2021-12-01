import { Component, OnInit } from '@angular/core';

import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'app-fuuga-votes',
  templateUrl: './fuuga-votes.component.html',
  styleUrls: ['./fuuga-votes.component.scss']
})
export class FuugaVotesComponent implements OnInit {

  constructor(
    private utilityService: UtilityService
  ) { }


  ngOnInit(): void {
    this.utilityService.setPageTitle('Votes • FUUGA')
  }


}
