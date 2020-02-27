import { Component } from '@angular/core';
import { WindowSizeService } from '../services/window-size.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})

export class MainNavComponent {
  // Original Code => -------------------------------------------------------------------------
  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );

  // constructor(private breakpointObserver: BreakpointObserver) {
  // }
  // Original Code <= -------------------------------------------------------------------------
  constructor(public windowSizeService: WindowSizeService) {
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
