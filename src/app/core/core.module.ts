import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from '@env/environment';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AngularMaterialModule } from '@material/angular-material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: environment.defaultLanguage }
  ],
})
export class CoreModule { }
