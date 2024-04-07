import { Inject, Injectable } from "@angular/core";

import RequestClient from "@app/core/http/RequestClient";
import { UserRepository, UserResponse, UsersResponse } from "@app/core/models/users";
import { HTTP_IMPLEMENTATION_TOKEN } from "@app/core/shared/tokens";

@Injectable({
  providedIn: 'root',
})
class ImagesRepository implements UserRepository {
  constructor(
    @Inject(HTTP_IMPLEMENTATION_TOKEN) private readonly client: RequestClient
  ) { }

  getUser(id: number) {
    return this.client.get<UserResponse>(`/users/${id}`)
  }

  getUsers() {
    return this.client.get<UsersResponse>(`/users`)
  }
}

export default ImagesRepository
