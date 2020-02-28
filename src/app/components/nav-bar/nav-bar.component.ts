import { Component, OnInit } from '@angular/core';
import { WindowSizeService } from '../../services/window-size.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
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
