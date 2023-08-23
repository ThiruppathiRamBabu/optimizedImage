import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage {
  imageUrl!: Observable<any>;
  

  constructor(private imageService: ImageService) {
    const imagePath: any = 'photo/photo-1691673236501-3023c988eb2b.avif';
    this.imageUrl = this.imageService.getImageUrl(imagePath);
   }

  

}
