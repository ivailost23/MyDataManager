import { Component } from '@angular/core';
import { WindowSizeService } from '../../services/window-size.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './app-nav-bar.component.html',
  styleUrls: ['./app-nav-bar.component.scss']
})

export class AppNavBarComponent {
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
