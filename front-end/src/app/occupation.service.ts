import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginatedResults } from './types/paginated-results';
import { Occupation } from './types/occupation';

@Injectable({
  providedIn: 'root'
})
export class OccupationService {

  constructor(private http: HttpClient) {}

  getOccupationByName(query: string, page = 1, count = 0) {
    const params = new URLSearchParams();

    params.append('name', query);

    if (!Number.isNaN(page)) {
      params.append('page', String(page));
    }

    if (!Number.isNaN(count)) {
      params.append('count', String(count));
    }

    return this.http.get<PaginatedResults<Occupation>>(`/api/occupations?${params}`);
  }
}
