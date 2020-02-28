import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowSizeService {
  constructor(private breakpointObserver: BreakpointObserver) { }

  public getMobileState(): Observable<BreakpointState> {
    return this.breakpointObserver.observe(Breakpoints.Handset);
  }
}
