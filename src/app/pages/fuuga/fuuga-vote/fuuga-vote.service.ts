import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { NotificationService } from 'src/app/components/notification/notification.service';
import { NavigationService } from 'src/app/service/navigation.service';
import { VoterDto } from './fuuga-voter-list/fuuga-voter.interface';

@Injectable({
  providedIn: 'root'
})
export class FuugaVoteService {
  private API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
    private navigationService: NavigationService,
    private notificationService: NotificationService
  ) { }



  registerVoter(voterDto: VoterDto,) {

    this.http
      .post<{ message: string }>(`${this.API_URL}voter/register`, voterDto)
      .subscribe(responseData => {
        this.notificationService.notify(`${responseData.message}`);
      });
  }



}
