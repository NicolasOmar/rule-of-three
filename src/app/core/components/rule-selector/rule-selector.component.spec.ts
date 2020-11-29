import { ComponentFixture, TestBed } from '@angular/core/testing';
// COMPONENT
import { RuleSelectorComponent } from './rule-selector.component';
// SERVICES
import { RuleDataService } from '@core/services/rule-data.service';
// MOCKS
import { RuleDataMockService } from '@mocks/services/rule-data.mock.service';

describe('RuleSelectorComponent', () => {
  let component: RuleSelectorComponent;
  let fixture: ComponentFixture<RuleSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleSelectorComponent ],
      providers: [
        {
          provide: RuleDataService,
          useClass: RuleDataMockService
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
