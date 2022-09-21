export interface PagingResponse{
  totalItems:number; //total item count
  totalPages: number; //total page dived from the total items
}
export interface PagingRequest{
  itemsPerPage:number;
  currentPage:number;
}
