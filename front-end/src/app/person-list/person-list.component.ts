import { Component, OnInit, OnDestroy } from '@angular/core';
import { PaginatedResults } from '../types/paginated-results';
import { Person } from '../types/person';
import { PersonService } from '../person.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'hc-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
})
export class PersonListComponent implements OnInit, OnDestroy {
  peopleResults: PaginatedResults<Person> = {} as PaginatedResults<Person>;
  loading = false;
  searchFormControl: FormControl;
  searchSubscription: Subscription;

  constructor(private personService: PersonService, private fb: FormBuilder) {}

  ngOnInit() {
    this.searchFormControl = this.fb.control('');
    
    this.loading = true;

    this.personService.getPeople()
      .subscribe(results => {
        this.peopleResults = results;
        this.loading = false;
      }, err => {
        console.warn(err);
        this.loading = false;
      });

    this.searchFormControl
      .valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(200),
        map((query: string) => {
          if (this.searchSubscription) {
            this.searchSubscription.unsubscribe();
          }

          this.loading = true;

          return this.personService.getPeople(query)
              .subscribe(people => {
                this.loading = false;
                this.peopleResults = people;
                this.searchSubscription = null;
              });
        }),
      )
      .subscribe(subscription => {
        this.searchSubscription = subscription;
      });
  }

  ngOnDestroy() {
    if (this.searchSubscription) this.searchSubscription.unsubscribe();
  }

  changePage(direction: 'next'|'previous') {
    const directionKey = `${direction}Page`;
    if (!this.peopleResults || !this.peopleResults[directionKey]) return;
    
    this.loading = true;

    this.personService.getPeople(this.searchFormControl.value, this.peopleResults[directionKey], this.peopleResults.itemsPerPage)
      .subscribe(people => {
        this.peopleResults = people;
        this.loading = false;
      }, err => {
        console.warn(err);
        this.loading = false;
      });
  }
}
