import {
  Component,
  OnInit,
  AfterContentInit,
  OnDestroy,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, FormControl, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription, timer } from 'rxjs';
import { distinctUntilChanged, filter, debounce, map, single } from 'rxjs/operators';

@Component({
  selector: 'hc-autocomplete-chips',
  templateUrl: './autocomplete-chips.component.html',
  styleUrls: ['./autocomplete-chips.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => AutocompleteChipsComponent),
    },
  ],
  host: {
    '(change)': 'onChange(value)',
  },
})
export class AutocompleteChipsComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor {
  @Input()
  value = [];
  @Input()
  options = [];
  @Input()
  single = false;

  @ViewChild('autocomplete', { static: true })
  autocompleteInput: ElementRef<HTMLInputElement>;

  @Output()
  queryChange = new EventEmitter<string>();

  queryControl: FormControl;
  selectedOption: any;
  showSuggestionList = false;
  newOption = {
    name: 'New',
    id: -1,
  };

  onChange: (...args: any[]) => void = () => {};
  onTouched: (...args: any[]) => void = () => {};

  isLoadingResults = false;

  private queryControlSubscription: Subscription;

  constructor(private fb: FormBuilder) {
    this.queryControl = this.fb.control('');
  }

  ngOnInit() {
    this.queryControlSubscription = this.queryControl
      .valueChanges
      .pipe(
        distinctUntilChanged(),
        filter(v => {
          if (!v) {
            this.options = [];
            this.selectedOption = null;
          }

          return v;
        }),
        debounce(() => timer(1000)),
        ).subscribe((query: string) => {
          this.isLoadingResults = true;
          this.queryChange.emit(query);
        });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.single && changes.value) {
      this.queryControl.setValue((this.value as any));
    }
    
    if (changes.options) {
      this.isLoadingResults = false;

      if (!changes.options.currentValue) return;
      
      const results = this.options
          .filter(option =>
              this.single ?
              (this.value as any).name.toLowerCase() != option.name.toLowerCase() :
              !this.value.some(val => val.name.toLowerCase() == option.name.toLowerCase())
          )
          .slice(0, 5);

      if (
        this.single &&
        this.queryControl.value &&
        !results.some(option =>
            option.name.toLowerCase() == this.queryControl.value.toLowerCase() ||
            option.name.toLowerCase() == (this.value as any).name
        ) &&
        (this.value as any).name.toLowerCase() != this.queryControl.value.toLowerCase()
      ) {
        results.push({
          name: this.queryControl.value,
          tagId: -1,
        });
      }
      else if (
        !this.single &&
        this.queryControl.value &&
        !results.some(option => option.name.toLowerCase() == this.queryControl.value.toLowerCase()) &&
        (!this.value.some(option => option.name.toLowerCase() == this.queryControl.value.toLowerCase()))
      ) {
        results.push({
          name: this.queryControl.value,
          tagId: -1,
        });
      }

      this.selectedOption = results[0];
      this.options = results;
    }
  }

  ngOnDestroy() {
    this.queryControlSubscription.unsubscribe();
  }

  writeValue(value = []) {
    this.value = value;

    if (this.single && value) {
      this.queryControl.setValue((value as any).name);
    }
  }

  registerOnChange(onChange: (...args: any[]) => void) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: (...args: any[]) => void) {
    this.onTouched = onTouched;
  }

  removeOption(index: number) {
    this.value.splice(index, 1);
    this.onChange(this.value);
  }

  addOption(option: any) {
    if (this.single) {
      this.value = option;
      this.queryControl.reset((this.value as any).name);
    }
    else {
      this.value.push(option);
      this.queryControl.reset('');
    }
    this.selectedOption = null;
    this.options = [];
    this.onChange(this.value);
  }

  shiftSelectedOptionUp() {
    const currentIndex = this.options.indexOf(this.selectedOption);
    this.selectedOption = this.options[currentIndex - 1 > -1 ? currentIndex - 1 : this.options.length - 1];
  }

  shiftSelectedOptionDown() {
    this.selectedOption = this.options[(this.options.indexOf(this.selectedOption) + 1) % this.options.length];
  }

  handleEnter(event: KeyboardEvent) {
    if (this.selectedOption) {
      event.stopPropagation();

      this.addOption(this.selectedOption);
    }
  }

  handleQueryBlur() {
    requestAnimationFrame(() => {
      this.showSuggestionList = false;
    });
  }
}
