import { environment } from "src/environments/environment";

export function RestangularConfigFactory (RestangularProvider:any) {
  RestangularProvider.setBaseUrl(environment.api.endpoint);
}
