import { Component, OnInit } from '@angular/core';

import { DialogService } from 'src/app/service/dialog.service';
import { UtilityService } from 'src/app/service/utility.service';
import { FuugaVoteService } from '../fuuga-vote.service';
import { ISetting } from './fuuga-vote-setting.interface';

@Component({
  selector: 'app-fuuga-vote-setting',
  templateUrl: './fuuga-vote-setting.component.html',
  styleUrls: ['./fuuga-vote-setting.component.scss']
})
export class FuugaVoteSettingComponent implements OnInit {
  setting: ISetting;

  constructor(
    private fuugaVoteService: FuugaVoteService,
    private utilityService: UtilityService,
    private dialogService: DialogService
  ) { }


  onUpdateSetting(event: any) {
    let value = {};
    const result = event.target!.checked as boolean;
    const id = event.target.id;

    value[id] = result;
    this.fuugaVoteService.updateSettings(this.setting._id, value)
  }


  initContent() {
    this.fuugaVoteService.getSettings()
      .subscribe(data => {
        this.setting = data.data.setting;
      });

    this.utilityService.setPageTitle('Election settings • FUUGA');
  }


  ngOnInit(): void {
    this.initContent();
  }

}
