import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'app-fuuga-voter-list',
  templateUrl: './fuuga-voter-list.component.html',
  styleUrls: ['./fuuga-voter-list.component.scss']
})
export class FuugaVoterListComponent implements OnInit {

  constructor(
    private utilityService: UtilityService
  ) { }

  ngOnInit(): void {
    this.utilityService.setPageTitle('FUUGA voters list')
  }
  
}
