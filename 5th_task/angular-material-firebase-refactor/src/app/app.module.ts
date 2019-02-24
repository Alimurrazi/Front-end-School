import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ReadComponent } from './read/read.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  MatTableModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatSortModule, 
  MatDialogModule, 
  MatButtonModule,
  MatIconModule
} from '@angular/material';
import { CreateComponent } from './create/create.component';
import { createComponent } from '@angular/compiler/src/core';

const appRoutes: Routes = [
  {
    path: 'person-create',
    component: CreateComponent,
    data: {title: 'create Person'}
  },
  {
    path: '',
    component: ReadComponent
  }]

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule, 
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
