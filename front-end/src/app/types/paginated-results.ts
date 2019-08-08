export interface PaginatedResults<T> {
    currentPage: number;
    nextPage?: number;
    previousPage?: number;
    lastPage?: number;
    total: number;
    itemsPerPage: number;
    results: T[];
}
