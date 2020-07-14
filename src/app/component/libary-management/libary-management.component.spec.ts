import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibaryManagementComponent } from './libary-management.component';

describe('LibaryManagementComponent', () => {
  let component: LibaryManagementComponent;
  let fixture: ComponentFixture<LibaryManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibaryManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibaryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
