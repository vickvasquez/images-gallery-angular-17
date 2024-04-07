import { Observable } from "rxjs";
import { User } from "./User.model";

export interface UsersResponse {
  users: User[]
}

export interface UserResponse {
  user: User
}

export interface UserRepository {
    getUser(id: number): Observable<UserResponse>
    getUsers(): Observable<UsersResponse>;
}
