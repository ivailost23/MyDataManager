import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from '../../services/user-authentication.service';

@Component({
  selector: 'app-nav-bar-side',
  templateUrl: './nav-bar-side.component.html',
  styleUrls: ['./nav-bar-side.component.scss']
})
export class NavBarSideComponent implements OnInit {
  // signedIn: boolean;
  // signInOutButton: string;
  // signInOutMessage: string;
  // userId = this.userAuthenticationService.userId;
  userInfo: any;
  userName: string;

  constructor(private userAuthenticationService: UserAuthenticationService) {

    this.userAuthenticationService.adalServiceUserInfo.subscribe(
      response => {
        this.userInfo = response;
        if (this.userInfo.authenticated) {
          this.userName = this.userInfo.userName.toUpperCase();
        } else {
          this.userName = 'Not Signed in!';
        }
      },
      error => console.log(error)
    );
  }

  ngOnInit(): void {
  }
}
