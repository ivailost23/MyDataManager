import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from '../../services/user-authentication.service';

@Component({
  selector: 'app-sign-on',
  templateUrl: './sign-on.component.html',
  styleUrls: ['./sign-on.component.scss']
})
export class SignOnComponent implements OnInit {
  signedIn: boolean;
  signInOutButton: string;
  userId = this.userAuthenticationService.userId;
  userInfo: any;

  constructor(private userAuthenticationService: UserAuthenticationService) {

    this.userAuthenticationService.adalServiceUserInfo.subscribe(
      response => {
        this.userInfo = response;
        if (this.userInfo.authenticated) {
          this.signedIn = true;
          this.userId = this.userInfo.userName.split('@')[0].toUpperCase();
          this.signInOutButton = 'SIGN OUT';
        } else {
          this.signedIn = false;
          this.userId = 'None';
          this.signInOutButton = 'SIGN IN';
        }
      },
      error => console.log(error)
    );
  }

  ngOnInit(): void {
  }

  public signInOut() {
    if (!this.signedIn) {
      this.userAuthenticationService.signIn();
    } else {
      this.userAuthenticationService.signOut();
    }
  }
}
