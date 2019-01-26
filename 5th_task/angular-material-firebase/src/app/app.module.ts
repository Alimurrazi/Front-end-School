import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonsDeatailComponent } from './persons-deatail/persons-deatail.component';
import { PersonsCreateComponent } from './persons-create/persons-create.component';
import { PersonsEditComponent } from './persons-edit/persons-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,
         MatPaginatorModule,
         MatProgressSpinnerModule, 
         MatSortModule, 
         MatTableModule, 
         MatIconModule, 
         MatButtonModule, 
         MatCardModule, 
         MatFormFieldModule } from "@angular/material";
import { FormsModule, 
         ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  {
     path: 'persons',
     component: PersonsComponent,
     data: { title: 'Persons List' }
  },
  {
      path: 'persons-details/:id',
      component: PersonsDeatailComponent,
      data: {title:'Persons Details'}     
  },
  {
    path: 'persons-create',
    component: PersonsCreateComponent,
    data: {title:'Create Persons'}
  },
  {
    path: 'persons-edit/:id',
    component: PersonsEditComponent,
    data: {title:'Edit Persons'}
  },
  {
    path: '',
    redirectTo: '/persons',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonsDeatailComponent,
    PersonsCreateComponent,
    PersonsEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule, 
    MatSortModule, 
    MatTableModule, 
    MatIconModule, 
    MatButtonModule, 
    MatCardModule, 
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
