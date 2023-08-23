import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IconPageRoutingModule } from './icon-routing.module';

import { IconPage } from './icon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IconPageRoutingModule,
    NgOptimizedImage
  ],
  declarations: [IconPage]
})
export class IconPageModule {}
