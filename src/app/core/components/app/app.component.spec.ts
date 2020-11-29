import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
// COMPONENT
import { AppComponent } from './app.component';
// SERVICES
import { FormDataService } from '@core/services/form-data.service';
import { FormStructureService } from '@core/services/form-structure.service';
// MOCKS
import { FormDataMockService } from '@mocks/services/form-data.mock.service';
import { FormStructureMockService } from '@mocks/services/form-structure.mock.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouteEnum } from '@shared/enums/routes.enums';
import { routes } from 'src/app/app-routing.module';

const configMock = {
  mainTitle: 'Rule of Three'
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
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
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    component = fixture.componentInstance;
    component.mainTitle = configMock.mainTitle;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should make router navigation work using ${RouteEnum.Second}`, fakeAsync(() => {
    router.navigate([RouteEnum.Second]).then(
      () => expect(location.path()).toBe(RouteEnum.Second)
    )
  }))

  it(`should make router navigation work using ${RouteEnum.Third}`, fakeAsync(() => {
    router.navigate([RouteEnum.Third]).then(
      () => expect(location.path()).toBe(RouteEnum.Third)
    )
  }))

  it(`should make router navigation work using ${RouteEnum.First}`, fakeAsync(() => {
    router.navigate(['/']).then(
      () => expect(location.path()).toBe(RouteEnum.First)
    )
  }))
});
