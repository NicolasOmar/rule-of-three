import { ComponentFixture, TestBed } from '@angular/core/testing';
// COMPONENTS
import { ResultLabelComponent } from './result-label.component';
// INTERFACES
import { LabelConfig } from '@shared/interfaces/form.interfaces';
// ENUMS
import { ColorEnum, SizeEnum } from '@shared/enums/inputs.enums';
// MOCKS
import { formDataMock } from '@mocks/data/form-data.mock';

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

  it('should the correct labelClasses with mocked data', () => {
    formDataMock.forEach(
      mock => {
        component.config = mock.result;
        component.ngOnInit();
        fixture.detectChanges();

        const testSize = mock.result.size || SizeEnum.big;
        const testColor = mock.result.color || ColorEnum.red;
        const testLabel = `ui ${testSize} ${testColor} horizontal label`;

        expect(component.labelClasses).toBe(testLabel);
      }
    )
  })
});
