import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage {

  imageUrl!: Observable<any>;
  imgUrl!: Observable<any>;
  imageLink!: Observable<any>;

  constructor(private imageService: ImageService) {
    const imagePath: any = 'avatar/DSC09335-02_2.jpg';
    this.imageUrl = this.imageService.getImageUrl(imagePath);

    const image: any = 'avatar/download.jpeg';
    this.imgUrl = this.imageService.getImageUrl(image);

    const photo: any = 'avatar/download (1).jpeg';
    this.imageLink = this.imageService.getImageUrl(photo);
  }

}
