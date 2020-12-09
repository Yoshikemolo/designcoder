import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from '@shared/angular-material.module';
import { SocialLinksComponent } from './social-links/social-links.component';
import { ToolsReelComponent } from './tools-reel/tools-reel.component';

// TODO: import my components here

@NgModule({
  imports: [
    AngularMaterialModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    // TODO: declare my components
  SocialLinksComponent,
    ToolsReelComponent],
  exports: [
    // TODO: export my components
  ]
})
export class SharedModule { }