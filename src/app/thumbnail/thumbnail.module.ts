import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThumbnailPageRoutingModule } from './thumbnail-routing.module';

import { ThumbnailPage } from './thumbnail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThumbnailPageRoutingModule,
    NgOptimizedImage
  ],
  declarations: [ThumbnailPage]
})
export class ThumbnailPageModule {}
