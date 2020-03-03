import { Component } from '@angular/core';
import { WindowSizeService } from '../../services/window-size.service';
import { UserAuthenticationService } from '../../services/user-authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './app-nav-bar.component.html',
  styleUrls: ['./app-nav-bar.component.scss']
})

export class AppNavBarComponent {
  signedIn: boolean;
  userInfo: any;
  constructor(private windowSizeService: WindowSizeService,
              private userAuthenticationService: UserAuthenticationService) {
    this.userAuthenticationService.adalServiceUserInfo.subscribe(
    response => {
      this.userInfo = response;
      this.userInfo.authenticated ? this.signedIn = true : this.signedIn = false;
    },
    error => console.log(error)
  );
  }

  isMobile: boolean;
  isMobileState = this.windowSizeService.getMobileState().subscribe(
    data => {
      this.isMobile = data.matches;
      console.log('isMobile = ' + this.isMobile);
    }
  );
  paddingLeft = this.isMobile ? 'padding-left: 0' : 'padding-left: 16px';


}

  // Original Code => -------------------------------------------------------------------------
  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );

  // constructor(private breakpointObserver: BreakpointObserver) {
  // }
  // Original Code <= -------------------------------------------------------------------------

  // Second Code => -------------------------------------------------------------------------
  //  constructor(private windowSizeService: WindowSizeService) {
  // }
  // isMobileState = this.windowSizeService.getMobileState().subscribe(
  //   data => {
  //     this.isMobile = data.matches;
  //     console.log('isMobile = ' + this.isMobile);
  //   }
  // );
  // Second Code <= -------------------------------------------------------------------------
