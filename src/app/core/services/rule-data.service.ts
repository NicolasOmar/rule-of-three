import { Injectable } from '@angular/core';
// INTERFACES
import { RuleSelector } from '@shared/interfaces/rule.interfaces';

@Injectable({
  providedIn: 'root'
})
export class RuleDataService {
  public ruleSelectors: Array<RuleSelector> = [
    {
      label: 'Cost of a Project',
      route: '/home'
    },
    {
      label: 'USD per page',
      route: '/second'
    }
  ];
}
