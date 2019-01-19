import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsDeatailComponent } from './persons-deatail.component';

describe('PersonsDeatailComponent', () => {
  let component: PersonsDeatailComponent;
  let fixture: ComponentFixture<PersonsDeatailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonsDeatailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsDeatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
