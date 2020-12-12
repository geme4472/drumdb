import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiQueryComponent } from './api-query.component';

describe('ApiQueryComponent', () => {
  let component: ApiQueryComponent;
  let fixture: ComponentFixture<ApiQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
