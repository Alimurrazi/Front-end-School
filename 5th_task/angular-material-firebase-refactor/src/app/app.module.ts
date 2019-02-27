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
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule,
  MatNativeDateModule,
  MatDatepickerModule
} from '@angular/material';
import { CreateComponent } from './create/create.component';
import { createComponent } from '@angular/compiler/src/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
// import {MatDatepickerModule} from '@angular/material/datepicker';

const appRoutes: Routes = [
  {
    path: 'person-create',
    component: CreateComponent,
    data: { title: 'create Person' }
  },
  {
    path: '',
    component: ReadComponent
  },
  {
    path: 'person-edit/:id',
    component: UpdateComponent,
    data: {title: 'Update Person'}
  }]

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    UpdateComponent,
    DeleteDialogComponent
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
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [DeleteDialogComponent],
})
export class AppModule { }
