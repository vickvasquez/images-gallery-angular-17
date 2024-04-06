import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Image } from '../../../core/images-service.service';
import { NgOptimizedImage } from '@angular/common';
import { AnimateZoomInDirective } from '../../directives/animations';

@Component({
  selector: 'app-image-element',
  standalone: true,
  imports: [NgOptimizedImage, AnimateZoomInDirective],
  templateUrl: './image-element.component.html',
  styleUrl: './image-element.component.scss'
})
export class ImageElementComponent {
  @Input() imageElement: Image = {
    name: '',
    url: '',
    id: 0
  }

  @Output() clickEvent = new EventEmitter<Image>();

  handleClick() {
    this.clickEvent.emit();
  }
}
