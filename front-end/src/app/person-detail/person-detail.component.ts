import { Component, OnInit, HostListener } from '@angular/core';
import { PersonService } from '../person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { Person, PersonUpdate } from '../types/person';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InterestService } from '../interest.service';
import { Observable } from 'rxjs';
import { PaginatedResults } from '../types/paginated-results';
import { Interest } from '../types/interest';
import { OccupationService } from '../occupation.service';
import { Occupation } from '../types/occupation';

@Component({
  selector: 'hc-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  loading = false;
  person: Person;
  editedPerson: PersonUpdate;
  edit = false;
  editForm: FormGroup;
  interestResults: Observable<PaginatedResults<Interest>>;
  occupationResults: Observable<PaginatedResults<Occupation>>;
  editModes: PersonEditModeObject;

  get anyEditModesEnabled() {
    return this.editModes && Object.keys(this.editModes).some(key => this.editModes[key]);
  }
  
  private editableFields = [
    'firstName',
    'lastName',
    'email',
    'picture',
    'age',
    'notes',
    'interests',
    'occupation',
    'address',
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private personService: PersonService,
    private interestService: InterestService,
    private occupationService: OccupationService,
  ) {
    this.resetEditModes();
  }

  ngOnInit() {
    this.route.params
      .pipe(mergeMap(params => {
        this.loading = true;
        return this.personService.getPerson(params.id);
      }))
      .subscribe(this.handlePerson, this.handleError);
  }

  @HostListener('keyup.control.enter')
  submit() {
    this.submitUpdate();
  }
  
  @HostListener('keyup.escape')
  cancelEdits() {
    this.resetEditModes();
    this.resetForm();
  }

  getInterests(query: string) {
    this.interestResults = this.interestService.getInterestsByName(query, 1, 0);
  }

  getOccupations(query: string) {
    this.occupationResults = this.occupationService.getOccupationByName(query, 1, 0);
  }

  editField(key: keyof PersonUpdate) {
    this.editModes[key] = true;
    this.editForm.get(key).reset(this.person[key]);
  }

  delete() {
    this.personService.deletePerson(this.person.id)
      .subscribe(() => this.router.navigate([ '..' ]));
  }

  private createForm() {
    this.editForm = this.fb.group({
      id: [ this.person.id, Validators.required ],
      ...this.editableFields.reduce((obj, key) => ({...obj, [key]: [null]}), {}),
    });
  }

  private resetForm() {
    this.editForm.reset({
      id: this.person.id,
      ...this.editableFields.reduce((obj, key) => ({...obj, [key]: null}), {}),
    });
  }

  private resetEditModes() {
    this.editModes = this.editableFields.reduce((obj, key) => ({...obj, [key]: false}), {} as PersonEditModeObject);
  }

  private submitUpdate() {
    this.loading = true;
    this.personService.updatePerson(this.editForm.value)
      .subscribe(this.handlePerson, this.handleError);
  }

  private handlePerson = (person: Person) => {
    this.person = person;

    if (!this.editForm) {
      this.createForm();
    }
    else {
      this.resetForm();
    }

    this.resetEditModes();
    this.loading = false;
  }

  private handleError = (err) => {
    console.warn(err);
    this.loading = false;
  }
}

type PersonEditModeObject = Record<keyof PersonUpdate, boolean>;
