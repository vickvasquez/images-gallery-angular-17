import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'
import { Image, ImagesService } from '../../core/images-service.service';
import { ImageElementComponent } from './image-element/image-element.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageElementComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  #imageService = inject(ImagesService)

  images: Image[] = this.#imageService.images().data;
  loading: boolean = this.#imageService.images().loading;

  getDetailImage(id: number) {
    this.#imageService.getImageByUserId(id)
      .subscribe(res => {
        console.log(res)
      })
  }
}
