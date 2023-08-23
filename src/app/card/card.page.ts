import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage{
  imageUrl!: Observable<any>;


  constructor(private imageService: ImageService) {
    const imagePath: any = 'card/photo-1637846959991-18e54d6e2035.avif';
    this.imageUrl = this.imageService.getImageUrl(imagePath);
   }

  

}
