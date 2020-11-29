import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
// COMPONENTS
import { RuleFormComponent } from './rule-form.component';
// SERVICES
import { FormStructureService } from '@core/services/form-structure.service';
// INTERFACES
import { FormStructure } from '@shared/interfaces/form.interfaces';
// MOCKS
import { FormStructureMockService } from '@mocks/services/form-structure.mock.service';
import { formUpdateValues, returnRuleResult } from '@mocks/data/form-data.mock';

describe('RuleFormComponent', () => {
  let component: RuleFormComponent;
  let fixture: ComponentFixture<RuleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleFormComponent ],
      providers: [
        FormBuilder,
        {
          provide: FormStructureService,
          useClass: FormStructureMockService
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate result and form validation status after form input changes', () => {
    const nullStructure: FormStructure = {
      first: null,
      second: null,
      third: null
    };

    formUpdateValues.forEach(
      formUpdate => {
        const calculatedResult = returnRuleResult(formUpdate);
        component.ruleForm.patchValue({ ...nullStructure })
        component.ruleForm.patchValue({ ...formUpdate });

        expect(component.result.value).toBe(calculatedResult);
        expect(component.ruleForm.valid).toBe(!!(calculatedResult));
      }
    );
  })
});
