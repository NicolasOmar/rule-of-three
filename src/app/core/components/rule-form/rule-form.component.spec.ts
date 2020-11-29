import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
// COMPONENTS
import { RuleFormComponent } from './rule-form.component';
// SERVICES
import { FormStructureMockService } from 'src/app/mocks/services/form-structure.mock.service';
// MOCKS
import { FormStructureService } from '@core/services/form-structure.service';

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
});
