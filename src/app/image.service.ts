import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private storage: AngularFireStorage) {}
  getImageUrl(imagePath: any): Observable<any | null>{
    const ref = this.storage.ref(imagePath);
    return ref.getDownloadURL();
  }
}
