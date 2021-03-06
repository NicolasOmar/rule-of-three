import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
// SERVICES
import { FormDataService } from '@core/services/form-data.service';
import { FormStructureService } from '@core/services/form-structure.service';
// ENUMS
import { RouteEnum } from '@shared/enums/routes.enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private sub = new Subscription();
  public contentWide = 10;
  public mainTitle = 'Tengo un traductor/intérprete que...';

  constructor(
    private formService: FormStructureService,
    private formDataService: FormDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listenRouteChanges();
  }

  private listenRouteChanges(): void {
    this.sub.add(
      this.router.events.subscribe(route => {
        if (route instanceof NavigationEnd) {
          switch (route.url) {
            case RouteEnum.Second:
              this.setFormData(this.formDataService.data[1]);
              break;
            case RouteEnum.Third:
              this.setFormData(this.formDataService.data[2]);
              break;
            default:
              this.setFormData(this.formDataService.data[0]);
              break;
          }
        }
      })
    );
  }

  private setFormData({ result, inputs }): void {
    this.formService.setResults(result);
    this.formService.setInputs(inputs);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
