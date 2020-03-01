import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AdalService } from 'adal-angular4';
import { BehaviorSubject } from 'rxjs';
import { UserInfo } from '../models/user-info';

const azureConfig = {
  tenant: environment.azureAD.tenant,
  clientId: environment.azureAD.clientId
};

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  adalServiceUserInfo = new BehaviorSubject<object>(this.adalService.userInfo).asObservable();

  // userInfoSubject = new BehaviorSubject<UserInfo>(this.getNewUserInfo());
  // userInfo = this.userInfoSubject.asObservable();
  userId: string = null;
  userAuthenticated = false;

  constructor(private adalService: AdalService) {
    this.adalService.init(azureConfig);
    this.adalService.handleWindowCallback();

    // this.adalServiceUserInfo.subscribe(
    //   response => {
    //     this.onAdalServiceUserInfoChanged(response);
    //     console.log('Service adalServiceUserInfo subscribe Called');
    //   },
    //   error => console.log(error)
    // );

    // this.userInfo.subscribe(
    //   response => {
    //     this.onUserInfoChanged(response);
    //     console.log('Service userinfo subscribe Called');
    //   },
    //   error => console.log(error)
    // );

  }
  // private getNewUserInfo(): UserInfo {
  //   console.log('Service getNewUserInfo Called');
  //   const newUserInfo: UserInfo = {
  //     userId: null,
  //     originalUserId: null,
  //     email: null,
  //     authenticated: false,
  //     adalServiceResponse: null
  //   };
  //   return newUserInfo;
  // }

  public signIn() {
    console.log('Service signIn Called');
    this.adalService.login();
  }
  public signOut() {
    console.log('Service signIn Called');
    this.adalService.logOut();
  }

  // private onAdalServiceUserInfoChanged(newUserInfo: any): void {
  //   console.log('Service onAdalServiceUserInfoChanged Called');
  //   if (newUserInfo.authenticated) {
  //     const newUserId: string = newUserInfo.userName.split('@')[0].toUpperCase();
  //     // this.signedIn = true;
  //     const updatedUserInfo: UserInfo = this.getNewUserInfo();
  //     updatedUserInfo.userId = newUserId;
  //     updatedUserInfo.email = newUserInfo.userNames;
  //     updatedUserInfo.authenticated = true;
  //     updatedUserInfo.adalServiceResponse = newUserInfo;
  //   }
      // this.userInfoSubject.next(updatedUserInfo);
      // this.signedIn ? this.signInOutButton = 'Sign Out' : this.signInOutButton = 'Sign In';
      // this.signedIn ? this.signInOutMessage = 'Hello ' + this.userId : this.signInOutMessage = 'Not signed in!';
    // } else {
      // this.signedIn = false;
      // this.userInfoSubject.next(this.getNewUserInfo());
      // this.signedIn ? this.signInOutButton = 'Sign Out' : this.signInOutButton = 'Sign In';
      // this.signedIn ? this.signInOutMessage = 'Hello ' + this.userId : this.signInOutMessage = 'Not signed in!';
    // }
  // }

  // private onUserInfoChanged(newUserInfo: any): void {
  //   console.log('Service onUserInfoChanged Called');
  //   if (newUserInfo.authenticated) {
  //     this.userId = newUserInfo.userId;
  //   } else {
  //     this.userId = null;
  //   }
  // }
}
