import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// SERVICES
import { FormDataService } from '@core/services/form-data.service';
import { FormStructureService } from '@core/services/form-structure.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private sub = new Subscription();
  public contentWide = 10;
  public mainTitle = 'Rule of Three';

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
            case '/second':
              this.setFormData(this.formDataService.secondFormData);
              break;
            default:
              this.setFormData(this.formDataService.mainFormData);
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
