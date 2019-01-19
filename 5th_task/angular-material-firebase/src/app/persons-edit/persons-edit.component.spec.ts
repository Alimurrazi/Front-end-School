import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsEditComponent } from './persons-edit.component';

describe('PersonsEditComponent', () => {
  let component: PersonsEditComponent;
  let fixture: ComponentFixture<PersonsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
