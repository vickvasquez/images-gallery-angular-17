import { Component, inject } from '@angular/core';

import { ImagesService } from './images-service.service';
import { ImageElementComponent } from './image-element/image-element.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageElementComponent, AsyncPipe],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  imageService = inject(ImagesService)

  getDetailImage(id:number) {
    this.imageService.getImageDetailById(id)
  }
}
