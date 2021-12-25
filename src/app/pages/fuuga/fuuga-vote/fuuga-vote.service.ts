import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

import { NotificationService } from 'src/app/components/notification/notification.service';
import { NavigationService } from 'src/app/service/navigation.service';
import { IVoter, VoterDto } from './fuuga-voter/fuuga-voter.interface';
import { IDashMetrics } from './fuuga-vote-dashboard/fuuga-vote-dashboard.inteface';
import { ElectivePositionEnum, ICandidate, RegisterCandidateDto } from './fuuga-vote-candidate/fuuga-vote-candidate.interface';
import { ISetting, SettingDto } from './fuuga-vote-setting/fuuga-vote-setting.interface';

@Injectable({
  providedIn: 'root'
})
export class FuugaVoteService {
  private API_URL = environment.API_URL;

  private candidatesPerPage: number;
  private filterByPosition?: ElectivePositionEnum;

  private votersPerPage?: number;
  private currentPage?: number;

  private metricsUpdated = new Subject<IDashMetrics>();

  private votersUpdated = new Subject<{
    voters: IVoter[],
    totalVoters: number
  }>();

  private candidatesUpdated = new Subject<{
    candidates: ICandidate[],
    totalCandidates: number
  }>();


  constructor(
    private http: HttpClient,
    private navigationService: NavigationService,
    private notificationService: NotificationService
  ) { }




  getMetricsUpdateListener() {
    return this.metricsUpdated.asObservable();
  }
  getMetrics() {
    this.http.get<{ data: IDashMetrics }>(`${this.API_URL}metrics`)
      .subscribe(data => {
        this.metricsUpdated.next(data.data);
        // this.notificationService.notify(`${data.message}`);
      });
  }




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
  getVoters(votersPerPage?: number, currentPage?: number) {
    this.votersPerPage = votersPerPage;
    this.currentPage = currentPage;

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
    this.http
      .patch<{ message: string }>(`${this.API_URL}voter/verify/${voterId}`, { isVerified: true })
      .subscribe(response => {
        this.notificationService.notify(response.message);
        this.getVoters(this.votersPerPage, this.currentPage);
      });;
  }



  deleteVoter(voterId: string) {
    this.http.delete<{ message: string }>(`${this.API_URL}voter/delete_one/${voterId}`)
      .subscribe(response => {
        this.notificationService.notify(response.message);
        this.getVoters(this.votersPerPage, this.currentPage);
      });
  };









  createCandidate(candidateData: RegisterCandidateDto) {

    const newCandidate = new FormData()
    newCandidate.append('image', candidateData.image);
    newCandidate.append('position', candidateData.position);
    newCandidate.append('manifesto', candidateData.manifesto);
    newCandidate.append('voterId', candidateData.voterId);

    this.http
      .post<{ message: string }>(`${this.API_URL}candidate/register`, newCandidate)
      .subscribe(responseData => {
        this.notificationService.notify(`${responseData.message}`);

        this.getCanditates(this.candidatesPerPage, this.currentPage, this.filterByPosition)
      });
  }


  getCandidatesUpdateListener() {
    return this.candidatesUpdated.asObservable();
  }
  getCanditates(candidatesPerPage: number, currentPage?: number, filterByPosition?: ElectivePositionEnum) {
    this.candidatesPerPage = candidatesPerPage;
    this.currentPage = currentPage;
    this.filterByPosition = filterByPosition;

    const queryParameter = `?pagesize=${candidatesPerPage}&page=${currentPage}&filter_by_position=${filterByPosition}`;

    this.http.get<{ data: { candidates: ICandidate[], totalCandidates: number } }>(`${this.API_URL}candidate/get_all${queryParameter}`)
      .subscribe(data => {
        this.candidatesUpdated.next({
          totalCandidates: data.data.totalCandidates,
          candidates: [...data.data.candidates]
        });
        // this.notificationService.notify(`${data.message}`);
      });
  }


  getCanditatesPublic(filterByPosition?: ElectivePositionEnum) {

    const queryParameter = `?filter_by_position=${filterByPosition}`;

    return this.http.get<{ data: { candidates: ICandidate[], totalCandidates: number } }>(`${this.API_URL}candidate/get_all/public${queryParameter}`);
  }


  getCanditatesByOffice(position: ElectivePositionEnum) {
    this.http.get<{ data: { candidates: ICandidate[], totalCandidates: number } }>(`${this.API_URL}candidate/get_all_by_position/${position}`)
      .subscribe(data => {
        this.candidatesUpdated.next({
          totalCandidates: data.data.totalCandidates,
          candidates: [...data.data.candidates]
        });
      });;
  }



  deleteCandidate(candidateId: string) {
    this.http.delete<{ message: string }>(`${this.API_URL}candidate/delete_one/${candidateId}`)
      .subscribe(response => {
        this.notificationService.notify(response.message);
        this.getVoters(this.votersPerPage, this.currentPage);
      });
  };






  getSettings() {
    return this.http.get<{ data: { setting: ISetting } }>(`${this.API_URL}setting/get`);
  }

  updateSettings(settingId: string, payload: SettingDto) {
    this.http
      .patch<{ message: string }>(`${this.API_URL}setting/update/${settingId}`, payload)
      .subscribe(response => {
        this.notificationService.notify(response.message);
      });
  }



}
