import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';


const MaterialImports = [
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule
];

@NgModule({
  imports: [MaterialImports],
  exports: [MaterialImports]
})
export class MaterialModule { }
