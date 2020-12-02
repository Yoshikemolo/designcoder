import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from '@shared/angular-material.module';

// TODO: import my components here

@NgModule({
  imports: [
    AngularMaterialModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    // TODO: declare my components
  ],
  exports: [
    // TODO: export my components
  ]
})
export class SharedModule { }