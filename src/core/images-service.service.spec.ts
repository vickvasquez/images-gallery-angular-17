import { TestBed } from '@angular/core/testing';

import { ImagesService} from './images-service.service';

describe('ImagesServiceService', () => {
  let service: ImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
