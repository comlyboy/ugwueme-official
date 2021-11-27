import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'app-fuuga-dashboard',
  templateUrl: './fuuga-dashboard.component.html',
  styleUrls: ['./fuuga-dashboard.component.scss']
})
export class FuugaDashboardComponent implements OnInit {

  constructor(
    private utilityService: UtilityService
  ) { }

  ngOnInit(): void {
    this.utilityService.setPageTitle('FUUGA dashboad');
  }


}
