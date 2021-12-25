import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { Subject } from 'rxjs';

import { StorageService } from '../../service/storage.service';
import { NavigationService } from '../../service/navigation.service';
import { NotificationService } from '../../components/notification/notification.service';
import { UserSignInDto, UserSignUpDto } from './user.dto';
import { IUser } from './user.interface';
import { IVoter } from '../fuuga/fuuga-vote/fuuga-voter/fuuga-voter.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = environment.API_URL;

  private userIsCommittee = false;
  private userIsAuthenticated = false;
  private token?: string;
  private userId?: string;

  authenticationStatusListener = new Subject<boolean>();
  userisCommitteeListener = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private navigationService: NavigationService,
    private notificationsService: NotificationService,
    private storageService: StorageService,
  ) { }


  /** returns user authentication token string */
  getToken() {
    return this.token;
  }


  /** returns user ID */
  getUserID() {
    return this.userId;
  }


  /**
* Gets user authentication status 
*
* Returns `true` if user is logged in and `false` if otherwise.
*/
  getIsAuthenticated() {
    return this.userIsAuthenticated;
  }


  /**  * User signup  */
  registerUser(userSignUpDto: UserSignUpDto) {
    this.http.post<{ message: string }>(`${this.API_URL}user/signup`, userSignUpDto)
      .subscribe(response => {

        this.notificationsService.notify(response.message);

        this.navigationService.goToDashboard();
      }, error => {
        this.authenticationStatusListener.next(false);
        // this.notificationsService.notify(error.message, `error`);
      });
  }


  /**
  * User Login.
  */
  loginUser(userSignInDto: UserSignInDto) {

    if (this.userIsAuthenticated) {
      this.notificationsService.notify('A user already Authenticated', 'info');

      this.navigationService.goToDashboard();
      return;
    }

    this.http.post<{ message: string, data: { token: string, user: IUser } }>(`${this.API_URL}user/login`, userSignInDto)
      .subscribe(response => {

        const token = response.data.token;
        this.token = token;
        this.userId = response.data.user._id;
        const user = response.data.user;
        const isCommittee = true;

        if (!token) {
          return this.notificationsService.notify(`Login not successful!!!`);
        }

        // this.notificationsService.notify(response.message);
        this.userIsAuthenticated = true;
        this.userIsCommittee = true;
        this.saveAuthenticationData(token, user, isCommittee);

        this.authenticationStatusListener.next(true);
        this.userisCommitteeListener.next(true);

        this.navigationService.goToDashboard();
      }, error => {
        this.authenticationStatusListener.next(false);
      });
  }



  loginVoter(votingSecret: string) {
    this.http.post<{ data: { token: string, voter: IVoter }, message: string }>(`${this.API_URL}voter/login`, { votingSecret })
      .subscribe(response => {

        const token = response.data.token;
        this.token = token;
        const user = response.data.voter;
        const isCommittee = false;

        if (!token) {
          return this.notificationsService.notify(`Login not successful!!!`);
        }

        this.userIsCommittee = false;
        this.userIsAuthenticated = true;
        this.saveAuthenticationData(token, user, isCommittee);
        this.authenticationStatusListener.next(true);
        this.userisCommitteeListener.next(false);
        this.notificationsService.notify(response.message);

      }, error => {
        this.authenticationStatusListener.next(false);
      });;
  }



  verifyUser(token: string) {
    this.http.get<{ message: string }>(`${this.API_URL}confirm/${token}`)
      .subscribe(response => {

        this.notificationsService.notify(response.message);

        // this.navigationService.goToLogin()
      }, error => {
        this.authenticationStatusListener.next(false);
      });
  }


  /**
*  Logging user out
*/
  logout() {
    this.token = ``;
    this.userId = ``;
    this.userIsAuthenticated = false;
    this.authenticationStatusListener.next(false);
    this.clearAuthenticationData();
    if (this.userIsCommittee) {
      this.navigationService.goToLogin();
    }
  }


  /**
*  calls function that stores the authentication datas to the browser local storage
*/
  private saveAuthenticationData(token: string, user: any, isCommittee: boolean) {
    this.storageService.saveAuthData(token, user, isCommittee);
  }


  /**
  *  Persists user authentication status
  * 
  * This is called at application first initialization.
  * 
  * ==> Does not excute if no user is logged in
  */
  async automaticAuthenticateUser() {
    const authenticationInformation = await this.getAuthenticationData();
    if (!authenticationInformation) {
      return;
    }

    this.token = authenticationInformation.token;

    this.userIsAuthenticated = true;
    this.userIsCommittee = authenticationInformation.isCommittee;
    this.authenticationStatusListener.next(true);
    this.userisCommitteeListener.next(authenticationInformation.isCommittee);
  }


  /**
  this gets the user authentication data from browser local starage
  */
  private async getAuthenticationData() {
    const authData = this.storageService.getAuthData();
    if (!authData) {
      return;
      // execution ends here if there is no saved auth data.
    }
    const token = authData.token;
    const user = authData.user;
    const isCommittee = authData.isCommittee;

    if (!isCommittee) {
      // this.logout();
      // return;
    }
    return { token, user, isCommittee };
  }


  /**
    Removes authentication data from the browser.

    It is called during logout
*/
  private clearAuthenticationData() {
    this.storageService.removeAuthData();
    // location.reload();
  }

}
