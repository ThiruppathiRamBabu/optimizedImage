import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.page.html',
  styleUrls: ['./icon.page.scss'],
})
export class IconPage {
  imageUrl!: Observable<any>;
  imgUrl!: Observable<any>;
  imageLink!: Observable<any>;

  constructor(private imageService: ImageService) {
    const imagePath: any = 'icon/heart.svg';
    this.imageUrl = this.imageService.getImageUrl(imagePath);

    const image: any = 'icon/star.svg';
    this.imgUrl = this.imageService.getImageUrl(image);

    const photo: any = 'icon/settings.svg';
    this.imageLink = this.imageService.getImageUrl(photo);
  }

}
