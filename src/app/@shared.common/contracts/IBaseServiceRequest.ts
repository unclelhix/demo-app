import { ICommandRequest } from "./ICommandRequest";
import { IQueryRequest } from "./IQueryRequest";

export interface IBaseServiceRequest<TEntity> extends ICommandRequest<TEntity>, IQueryRequest<TEntity>{}
