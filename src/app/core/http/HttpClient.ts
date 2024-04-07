import { HttpClient } from "@angular/common/http"
import { Inject, Injectable, InjectionToken, inject } from "@angular/core"
import RequestClient from "./RequestClient"
import { BASE_URL_TOKEN } from "../shared/tokens"


@Injectable({
  providedIn: 'root'
})
class ClientHttp implements RequestClient {
  private http = inject(HttpClient)

  constructor(@Inject(BASE_URL_TOKEN) private baseUrl: string) { }

  get<T>(endpoint: string) {
    return this.http.get<T>(this.buildEndpoint(endpoint))
  }

  private buildEndpoint(endpoint: string) {
    return `${this.baseUrl}${endpoint}`
  }
}

export default ClientHttp
