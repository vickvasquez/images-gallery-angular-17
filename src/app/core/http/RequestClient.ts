import { Observable } from "rxjs";

interface RequestClient {
  get<T>(endpoint: string): Observable<T>
}

export default RequestClient
