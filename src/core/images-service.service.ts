import { Injectable } from '@angular/core';

export interface Image {
  id: number;
  name: string;
  url: string;
}

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

  constructor() { }

  async getAll(): Promise<Image[]> {
    return Promise.resolve(IMAGES);
  }
}
