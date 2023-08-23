import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoPageRoutingModule } from './photo-routing.module';

import { PhotoPage } from './photo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoPageRoutingModule,
    NgOptimizedImage
  ],
  declarations: [PhotoPage]
})
export class PhotoPageModule {}
