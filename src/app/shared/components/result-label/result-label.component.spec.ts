import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultLabelComponent } from './result-label.component';

describe('ResultLabelComponent', () => {
  let component: ResultLabelComponent;
  let fixture: ComponentFixture<ResultLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
