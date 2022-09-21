
import { ResponseBody } from "@shared.common/responses/ResponseWrapper";
import { Observable } from "rxjs";




export interface ICommandRequest<TEntity> {
  add<TResponse>(object:TEntity):Observable<ResponseBody<TResponse>>;
  update<TResponse>(object: TEntity):Observable<ResponseBody<TResponse>>;
}
