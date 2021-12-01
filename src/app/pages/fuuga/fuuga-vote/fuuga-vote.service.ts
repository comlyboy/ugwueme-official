import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

import { NotificationService } from 'src/app/components/notification/notification.service';
import { NavigationService } from 'src/app/service/navigation.service';
import { IVoter, VoterDto } from './fuuga-voter/fuuga-voter.interface';

@Injectable({
  providedIn: 'root'
})
export class FuugaVoteService {
  private API_URL = environment.API_URL;


  private votersUpdated = new Subject<{
    voters: IVoter[],
    totalVoters: number
  }>();


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



  getVotersUpdateListener() {
    return this.votersUpdated.asObservable();
  }

  getVoters(votersPerPage: number, currentPage: number) {
    const queryParameter = `?pagesize=${votersPerPage}&page=${currentPage}`;

    this.http
      .get<{ data: { voters: IVoter[], totalVoters: number } }>(`${this.API_URL}voter/get_all${queryParameter}`)
      .subscribe(data => {
        this.votersUpdated.next({
          totalVoters: data.data.totalVoters,
          voters: [...data.data.voters]
        });
        // this.notificationService.notify(`${data.message}`);
      });
  }


  verifyVoter(voterId: string) {
    return this.http
      .get<{ message: string }>(`${this.API_URL}voter/verify/${voterId}`);
  }


  deleteVoter(voterId: string) {
    this.http.delete<{ message: string }>(`${this.API_URL}voter/deleteOne/${voterId}`)
      .subscribe(response => {
        this.notificationService.notify(response.message);
        // this.navigationService.goToRepairRecordsPaage();
        // this.getTransactions(12, 1);
      });
  };



}
