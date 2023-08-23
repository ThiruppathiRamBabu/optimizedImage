import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.page.html',
  styleUrls: ['./thumbnail.page.scss'],
})
export class ThumbnailPage {

  imageUrl!: Observable<any | null>;
  imgUrl!: Observable<any>;
  imageLink!: Observable<any>;

  constructor(private imageService: ImageService) {
    const imagePath:any = 'thumbnail/download (2).jpeg';
    this.imageUrl = this.imageService.getImageUrl(imagePath);

    const image: any = 'thumbnail/images (1).jpeg';
    this.imgUrl = this.imageService.getImageUrl(image);

    const photo: any = 'thumbnail/images.jpeg';
    this.imageLink = this.imageService.getImageUrl(photo);
  }

}
