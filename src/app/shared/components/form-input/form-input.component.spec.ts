import { ComponentFixture, TestBed } from '@angular/core/testing';
// COMPONENTS
import { FormInputComponent } from './form-input.component';
// MOCKS
import { formDataMock, randomInputValues } from '@mocks/data/form-data.mock';

describe('FormInputComponent', () => {
  let component: FormInputComponent;
  let fixture: ComponentFixture<FormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputComponent);
    component = fixture.componentInstance;
    component.config = formDataMock[0].inputs[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change _value variable after execute onInput method', () => {
    const spyOnMethod = spyOn(component, 'onInput');

    randomInputValues.forEach(
      value => {
        component.onInput(value);
        expect(spyOnMethod).toHaveBeenCalled();
      }
    )
    expect(spyOnMethod).toHaveBeenCalledTimes(randomInputValues.length)
  })

  it('should x', () => {
    const spyOnWriteValue = spyOn(component, 'writeValue');

    randomInputValues.forEach(
      value => {
        component.writeValue(value);
        expect(spyOnWriteValue).toHaveBeenCalledWith(value);
      }
    )
    expect(spyOnWriteValue).toHaveBeenCalledTimes(randomInputValues.length)
  })
});
