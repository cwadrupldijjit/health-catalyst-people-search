import { Injectable } from '@angular/core';
import { PaginatedResults } from './types/paginated-results';
import { Interest } from './types/interest';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  constructor(private http: HttpClient) {}

  getInterestsByName(query: string, page = 1, count = 8) {
    const params = new URLSearchParams();

    params.append('name', query);

    if (!Number.isNaN(page)) {
      params.append('page', String(page));
    }

    if (!Number.isNaN(count)) {
      params.append('count', String(count));
    }

    return this.http.get<PaginatedResults<Interest>>(`/api/interests?${params}`);
  }
}
