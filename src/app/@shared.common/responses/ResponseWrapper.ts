import { PagingRequest, PagingResponse } from "./Paging";
export interface ServiceResponse<T> {data:T;}
export interface RequestResponse{errorMessage: string[]; isSuccess: boolean;}
export interface ResponseBody<T> extends RequestResponse{data:T;}
export interface PagingResponseBody<T> extends ResponseBody<T>, PagingRequest, PagingResponse {}
