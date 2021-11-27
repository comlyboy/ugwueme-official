import { Component, OnInit } from '@angular/core';

import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'app-fuuga-home',
  templateUrl: './fuuga-home.component.html',
  styleUrls: ['./fuuga-home.component.scss']
})
export class FuugaHomeComponent implements OnInit {

  constructor(
    private utilityService: UtilityService
  ) { }

  ngOnInit(): void {
    this.utilityService.setPageTitle('FUUGA')
  }

}
