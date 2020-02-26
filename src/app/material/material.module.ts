import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';

const MaterialImports = [
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatSidenavModule
];

@NgModule({
  imports: [MaterialImports],
  exports: [MaterialImports]
})
export class MaterialModule { }
