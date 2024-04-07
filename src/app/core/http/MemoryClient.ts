import { Observable } from "rxjs";
import RequestClient from "./RequestClient";

class MemoryClient implements RequestClient {
  get<T>(endpoint: string): Observable<T> {
    throw new Error("Method not implemented.");
  }
}
