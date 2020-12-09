import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from '@env/environment';

import { StoreModule } from '@ngrx/store';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AngularMaterialModule } from '@material/angular-material.module';

import { AuthenticationService } from '@core/authentication/authentication.service';
@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    StoreModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: environment.defaultLanguage },
    AuthenticationService
  ],
})
export class CoreModule { }
