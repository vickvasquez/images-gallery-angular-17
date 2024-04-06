import { Component, OnInit } from '@angular/core';
import { Image, ImagesService } from '../../core/images-service.service';
import { ImageElementComponent } from './image-element/image-element.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageElementComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  images: Image[] = [];

  constructor(private readonly imageService: ImagesService) { }

  async ngOnInit(): Promise<void> {
    this.images = await this.imageService.getAll()
  }
}
