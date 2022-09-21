type Nullable<T> = T | undefined | null;

export interface BaseModel{
  id:Nullable<number>;
  createdOn: Date;
  createdBy:string;
  UpdatedOn:Date;
  UpdatedBy:string;
}
