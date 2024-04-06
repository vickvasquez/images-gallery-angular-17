import { Component, Input } from '@angular/core';
import { Image } from '../../../core/images-service.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-image-element',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './image-element.component.html',
  styleUrl: './image-element.component.scss'
})
export class ImageElementComponent {
  @Input() imageElement: Image = {
    name: '',
    url: '',
    id: 0
  }
}
