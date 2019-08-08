import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';


const routes: Routes = [
  {
    path: 'people',
    component: PersonListComponent,
  },
  {
    path: 'people/:id',
    component: PersonDetailComponent,
  },
  {
    path: '**',
    redirectTo: 'people',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
