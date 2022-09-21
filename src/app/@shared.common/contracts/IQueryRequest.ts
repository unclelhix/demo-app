import { Observable } from "rxjs";
import { PagingRequest, PagingResponseBody, ResponseBody } from "..";



export interface IQueryRequest<T>{
  get(pagingRequest: PagingRequest):Observable<PagingResponseBody<T>>;
  getbyId(id:number): Observable<ResponseBody<T>>;
}
