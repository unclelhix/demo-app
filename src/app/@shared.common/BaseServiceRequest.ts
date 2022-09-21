import { Restangular } from "ngx-restangular";
import { Observable } from "rxjs";
import { IBaseServiceRequest } from "./contracts/IBaseServiceRequest";
import { PagingRequest } from "./responses/Paging";
import { ResponseBody, PagingResponseBody } from "./responses/ResponseWrapper";

export abstract class BaseServiceRequest<TEntity> implements IBaseServiceRequest<TEntity>{

  protected abstract getUrl:string;
  protected abstract getByIdUrl:string;
  protected abstract addUrl:string;
  protected abstract updateUrl:string;

  constructor(protected restangular: Restangular){}

  add<TResponse>(object: TEntity): Observable<ResponseBody<TResponse>> {
    return this.restangular.all(this.addUrl).post(object);
  }
  update<TResponse>(object: TEntity): Observable<ResponseBody<TResponse>> {
    return this.restangular.one(this.getUrl).customPATCH(object);
  }
  get(pagingRequest: PagingRequest): Observable<PagingResponseBody<TEntity>> {
    return this.restangular.one(this.getUrl).get(pagingRequest)
  }
  getbyId(id: number): Observable<ResponseBody<TEntity>> {
    return this.restangular.one(this.getByIdUrl,id).get();
  }

}
