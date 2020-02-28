import { Component } from '@angular/core';
import { WindowSizeService } from '../services/window-size.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})

export class MainNavComponent {
  constructor(private windowSizeService: WindowSizeService) {
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
