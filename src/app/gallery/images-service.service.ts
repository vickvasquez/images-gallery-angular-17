import { Inject, Injectable, computed, effect, signal } from '@angular/core';
import { map } from 'rxjs';

import { User, UserRepository } from '@app/core/models/users';
import { Image } from '@app/core/models/users/Image.model';
import { USER_REPOSITORY_INTERFACE_TOKEN } from '@app/core/shared/tokens';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  #state = signal<Image[]>([])
  images = computed(() => this.#state())

  constructor(
    @Inject(USER_REPOSITORY_INTERFACE_TOKEN)
    private readonly userRepository: UserRepository
  ) {
    this.loadImages()
  }

  getImageDetailById(id: number) {
    return this.userRepository.getUser(id).subscribe({error: console.log})
  }

  private loadImages() {
    return this.userRepository.getUsers()
      .pipe(map(data => data.users.map(this.toImage)))
      .subscribe(this.#state.set)
  }

  private toImage(user: User) {
    return {
      id: user.id,
      url: user.image,
      name: user.firstName + ' ' + user.lastName
    }
  }
}
