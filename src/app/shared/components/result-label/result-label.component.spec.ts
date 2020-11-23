import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorEnum, SizeEnum } from '@shared/enums/inputs.enums';
import { LabelConfig } from '@shared/interfaces/form.interfaces';

import { ResultLabelComponent } from './result-label.component';

const labelMock: LabelConfig = {
  size: SizeEnum.big,
  color: ColorEnum.red
}

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
    component.config = labelMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
