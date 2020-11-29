import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
// COMPONENT
import { AppComponent } from './app.component';
// SERVICES
import { FormDataService } from '@core/services/form-data.service';
import { FormStructureService } from '@core/services/form-structure.service';
// MOCKS
import { FormDataMockService } from 'src/app/mocks/services/form-data.mock.service';
import { FormStructureMockService } from 'src/app/mocks/services/form-structure.mock.service';

const configMock = {
  mainTitle: 'Rule of Three'
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        {
          provide: FormStructureService,
          useClass: FormStructureMockService
        },
        {
          provide: FormDataService,
          useClass: FormDataMockService
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.mainTitle = configMock.mainTitle;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title '${configMock.mainTitle}'`, () => {
    expect(component.mainTitle).toEqual(configMock.mainTitle);
  });
});
