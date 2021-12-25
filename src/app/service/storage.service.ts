import { Injectable } from '@angular/core';

// import { IBranch } from '../pages/branch/branch.inteface';
// import { IUser, UserTypeEnum } from '../pages/user/user.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  /** Saves authentication data into browser storage.
  
  Returns `Void` */
  saveAuthData(token: string, user: any, isCommittee?: boolean) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isCommittee', JSON.stringify(isCommittee));
  }



  /**
* gets logged user authentication data.
* 
* Returns `void`, if userOBJ and token are not awailable.
*/
  getAuthData() {
    const token = localStorage.getItem('token');
    const user: any = localStorage.getItem('user');
    const userIsCommittee: any = localStorage.getItem('isCommittee');

    const parsedUser: any = JSON.parse(user);
    const isCommittee = JSON.parse(userIsCommittee) as boolean;

    //   if (user && token) {
    //     resolve({ token, user: parsedUser, authenticatedUserType: parsedLoggedUserType });
    //   }
    // });
    if (user && token) {
      return { token, user: parsedUser, isCommittee };
    }
    return;

  }


  getUserOBJ() {
    const user = localStorage.getItem('user');
    if (!user) {
      return null;
    }
    return JSON.parse(user);
  }



  removeUserOBJ() {
    localStorage.removeItem('user');
  }


  /**
 * Clear authentication data from browser storage.
 * 
 * Returns `Void` 
 */
  removeAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('isCommittee');
  }

}
