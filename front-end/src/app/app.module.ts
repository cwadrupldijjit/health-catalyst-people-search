import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { CashmereModule } from './cashmere/cashmere.module';
import { HttpClientModule } from '@angular/common/http';
import { TextFizzleDirective } from './text-fizzle.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { AutocompleteChipsComponent } from './autocomplete-chips/autocomplete-chips.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonCardComponent,
    PersonListComponent,
    PersonDetailComponent,
    TextFizzleDirective,
    AutocompleteChipsComponent
  ],
  imports: [
    CashmereModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
