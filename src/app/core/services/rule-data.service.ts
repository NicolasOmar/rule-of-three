import { Injectable } from '@angular/core';
// INTERFACES
import { RuleSelector } from '@shared/interfaces/rule.interfaces';
// ENUMS
import { RouteEnum } from '@shared/enums/routes.enums';

@Injectable({
  providedIn: 'root'
})
export class RuleDataService {
  public ruleSelectors: Array<RuleSelector> = [
    {
      label: 'Cost of a Project',
      route: RouteEnum.First
    },
    {
      label: 'USD per page',
      route: RouteEnum.Second
    },
    {
      label: 'USD per hour',
      route: RouteEnum.Third
    }
  ];
}
