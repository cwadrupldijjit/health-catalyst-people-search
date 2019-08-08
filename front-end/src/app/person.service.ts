import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginatedResults } from './types/paginated-results';
import { Person, PersonUpdate } from './types/person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {

  constructor(private http: HttpClient) {}

  getPeople(query?: string, page = 1, count = 5) {
    const params = new URLSearchParams();

    if (page && typeof page == 'number') {
      params.append('page', String(page));
    }

    if (count && typeof count == 'number') {
      params.append('count', String(count));
    }

    if (query) {
      params.append('query', query);
    }

    return this.http.get<PaginatedResults<Person>>(`/api/people?${params}`);
  }

  getPerson(id: number) {
    return this.http.get<Person>(`/api/people/${id}`);
  }

  createPerson(person: Person) {
    return this.http.post<Person>(`/api/people`, person);
  }

  updatePerson(update: PersonUpdate) {
    return this.http.patch<Person>(`/api/people/${update.id}`, update);
  }

  deletePerson(id: number) {
    return this.http.delete<Person>(`/api/people/${id}`);
  }
}
