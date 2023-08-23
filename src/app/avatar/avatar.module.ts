import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvatarPageRoutingModule } from './avatar-routing.module';

import { AvatarPage } from './avatar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarPageRoutingModule,
    NgOptimizedImage
  ],
  declarations: [AvatarPage]
})
export class AvatarPageModule {}
