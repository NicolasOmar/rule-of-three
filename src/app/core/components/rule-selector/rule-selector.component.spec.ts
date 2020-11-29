import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
// COMPONENT
import { RuleSelectorComponent } from './rule-selector.component';
// SERVICES
import { RuleDataMockService } from 'src/app/mocks/services/rule-data.mock.service';
// MOCKS
import { RuleDataService } from '@core/services/rule-data.service';

describe('RuleSelectorComponent', () => {
  let component: RuleSelectorComponent;
  let fixture: ComponentFixture<RuleSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleSelectorComponent ],
      imports: [ AppRoutingModule ],
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
