import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

// Responsive Nav Bar imports
import { AppNavBarComponent } from './components/app-nav-bar/app-nav-bar.component';
import { NavBarSideComponent} from './components/nav-bar-side/nav-bar-side.component';
import { NavBarMainComponent } from './components/nav-bar-main/nav-bar-main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SignOnComponent } from './components/sign-on/sign-on.component';
// ----------------------------------------------------------
import { AdalService, AdalGuard, AdalInterceptor } from 'adal-angular4';
import { ChartComponent } from './components/chart/chart.component';
import { DashboardSalesComponent } from './components/dashboard-sales/dashboard-sales.component';
import { Chart2Component } from './components/chart2/chart2.component';
import { Chart3Component } from './components/chart3/chart3.component';
import { Chart4Component } from './components/chart4/chart4.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavBarComponent,
    NavBarSideComponent,
    NavBarMainComponent,
    SignOnComponent,
    ChartComponent,
    DashboardSalesComponent,
    Chart2Component,
    Chart3Component,
    Chart4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [AdalService, AdalGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
