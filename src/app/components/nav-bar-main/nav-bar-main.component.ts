import { Component, OnInit } from '@angular/core';
import { WindowSizeService } from '../../services/window-size.service';

@Component({
  selector: 'app-nav-bar-main',
  templateUrl: './nav-bar-main.component.html',
  styleUrls: ['./nav-bar-main.component.scss']
})
export class NavBarMainComponent implements OnInit {
  constructor(private windowSizeService: WindowSizeService) {
  }
  isMobile: boolean;
  isMobileState = this.windowSizeService.getMobileState().subscribe(
    data => {
      this.isMobile = data.matches;
      console.log('isMobile = ' + this.isMobile);
    }
  );

  ngOnInit(): void {
  }

}
