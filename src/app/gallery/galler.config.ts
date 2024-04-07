import ClientHttp from "@app/core/http/HttpClient";
import { BASE_URL_TOKEN, HTTP_IMPLEMENTATION_TOKEN, USER_REPOSITORY_INTERFACE_TOKEN } from "@app/core/shared/tokens";
import ImagesRepository from "./images-repository";

export const galleryConfig = [
  {
    provide: BASE_URL_TOKEN,
    useValue: 'https://dummyjson.com'
  },
  {
    provide: HTTP_IMPLEMENTATION_TOKEN,
    useExisting: ClientHttp
  },
  {
    provide: USER_REPOSITORY_INTERFACE_TOKEN,
    useExisting: ImagesRepository,
    deps: [ClientHttp]
  },
  {
    provide: ClientHttp,
    useClass: ClientHttp
  }
]
