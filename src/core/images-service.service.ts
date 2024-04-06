import { Injectable, computed, signal } from '@angular/core';
import { Observable } from 'rxjs';

export interface Image {
  id: number;
  name: string;
  url: string;
}

interface Response<T> {
  loading: boolean;
  data: T;
}

export interface ImagesResponse extends Response<Image[]> {}
export interface ImageResponse extends Response<Image> {}

const IMAGES: Image[] = [
  {
    id: 1,
    name: 'Image 1',
    url: 'https://media.gettyimages.com/id/1253350376/es/foto/lanzamiento-del-segundo-rollo.jpg?s=2048x2048&w=gi&k=20&c=_-pStTTxgc-2RdBfwRblV5ZbOPt1ywXXTXs0sBl5uzE='
  },
  {
    id: 2,
    name: 'Image 2',
    url: 'https://media.gettyimages.com/id/1253350376/es/foto/lanzamiento-del-segundo-rollo.jpg?s=2048x2048&w=gi&k=20&c=_-pStTTxgc-2RdBfwRblV5ZbOPt1ywXXTXs0sBl5uzE='
  },
  {
    id: 3,
    name: 'Image 3',
    url: 'https://media.gettyimages.com/id/1253350376/es/foto/lanzamiento-del-segundo-rollo.jpg?s=2048x2048&w=gi&k=20&c=_-pStTTxgc-2RdBfwRblV5ZbOPt1ywXXTXs0sBl5uzE='
  }
]

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  #state = signal<ImagesResponse>({
    loading: true,
    data: []
  })

  images = computed(() => this.#state())

  constructor() {
    this.#state.set(({
      loading: false,
      data: IMAGES
    }))
  }

  getImageByUserId(id: number): Observable<ImageResponse> {
    const image = IMAGES.find(image => image.id === +id) ?? {
      id: 0,
      name: '',
      url: ''
    }

    return new Observable(subscriber => {
      subscriber.next({
        loading: false,
        data: image
      })
    })
  }
}
